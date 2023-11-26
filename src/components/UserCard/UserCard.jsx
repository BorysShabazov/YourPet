import { useEffect, useRef, useState } from 'react';
import { UserForm } from './UserForm';

const UserCard = ({ onTogleLeavingModal }) => {
  const userCardRef = useRef(null);

  const [editReset, setEditReset] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);

  const handleEditForm = () => {
    setIsEditForm(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isEditForm &&
        userCardRef.current &&
        !userCardRef.current.contains(event.target)
      ) {
        setEditReset(true);
        setIsEditForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      setEditReset(false);
    };
  }, [isEditForm]);

  return (
    <div
      ref={userCardRef}
      className="relative w-[280px] bg-white rounded-[20px] shadow pt-[20px] pb-[24px] px-[8px] md:w-[704px] md:px-[20px] xl:w-[395px] rounded-[20px] mx-auto
    "
    >
      <div className="mdOnly:flex flex-row-reverse justify-center items-center gap-[70px]">
        <UserForm
          onTogleLeavingModal={onTogleLeavingModal}
          handleEditForm={handleEditForm}
          editReset={editReset}
        />
      </div>
    </div>
  );
};

export default UserCard;
