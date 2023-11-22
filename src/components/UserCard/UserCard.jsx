import { useEffect, useState } from 'react';
import { UserForm } from './UserForm';
import { useDispatch, useSelector } from 'react-redux';
import { getRefresh, getUser } from '../../Redux/auth/auth-selectors';
import { currentUser } from '../../Redux/auth/auth-operations';

const UserCard = () => {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(false);
  const userData = useSelector(getUser);

  useEffect(() => {
    if (!userData) {
      dispatch(currentUser());
    }
  }, [dispatch, userData]);

  useEffect(() => {
    if (userData) {
      setDataLoaded(true);
    }
  }, [userData]);

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }

  // Если данные загружены, отображаем компонент
  return (
    <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[20px] pb-[24px] px-[8px] md:w-[704px] md:px-[20px] xl:w-[395px] rounded-[20px]">
      <div className="mdOnly:flex flex-row-reverse justify-center items-center gap-[70px]">
        <UserForm user={userData} />
      </div>
    </div>
  );
};

export default UserCard;
