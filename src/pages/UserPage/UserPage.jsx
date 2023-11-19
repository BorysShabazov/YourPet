import MyPetsCard from '../../components/MyPetsCard/MyPetsCard';
import UserCard from '../../components/UserCard/UserCard';

const UserPage = () => {

  return (
    <section>
      <div className="relative container mx-auto xl:flex gap-[32px]">
        <UserCard />
        <MyPetsCard />
        <div className="md:hidden flex justify-center items-center flex-col fixed right-[20px] bottom-[20px] w-20 h-20 bg-gradient-to-r from-lightBlue to-blue  rounded-full shadow ">
          <div className="w-6 h-6 relative" />
          <div className="text-white text-xs font-semibold font-['Manrope']">
            Add pet
          </div>
        </div>
      </div>
    </section>
  );

};

export default UserPage;
