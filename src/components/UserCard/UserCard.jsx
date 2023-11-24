import { UserForm } from './UserForm';

const UserCard = ({onTogleLeavingModal}) => {

  return (
    <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[20px] pb-[24px] px-[8px] md:w-[704px] md:px-[20px] xl:w-[395px] rounded-[20px]">
      <div className="mdOnly:flex flex-row-reverse justify-center items-center gap-[70px]">
        <UserForm onTogleLeavingModal={onTogleLeavingModal}/>
      </div>
    </div>
  );
};

export default UserCard;
