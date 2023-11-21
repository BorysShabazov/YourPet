import { useState } from 'react';
import { UserForm } from './UserForm';

const UserCard = () => {

  const userData = {
    avatar:
      'https://burst.shopifycdn.com/photos/professional-man-portrait.jpg?width=1000&format=pjpg&exif=0&iptc=0',
    name: 'John',
    email: 'john.doe@mail.com',
    birthday: '1990-12-20',
    phone: '0000-0000-00-00',
    city: 'London',
  };
  
  const [user, setUser] = useState(userData || {});

  const handleUser = (data) => {
    setUser(data)
  }

  return (
    <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[20px] pb-[24px] px-[8px] md:w-[704px] md:px-[20px] xl:w-[395px] rounded-[20px]">
      <div className="mdOnly:flex flex-row-reverse justify-center items-center gap-[70px]">
      <UserForm user={userData} handleUser={handleUser}/>
      </div>
    </div>
  );
};

export default UserCard;
