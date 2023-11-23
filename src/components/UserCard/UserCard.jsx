import { UserForm } from './UserForm';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../Redux/auth/auth-selectors';

const UserCard = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[20px] pb-[24px] px-[8px] md:w-[704px] md:px-[20px] xl:w-[395px] rounded-[20px]">
      {isLoggedIn && <div className="mdOnly:flex flex-row-reverse justify-center items-center gap-[70px]">
        <UserForm />
      </div>}
    </div>
  );
};

export default UserCard;
