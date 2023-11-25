import { Link, useLocation } from 'react-router-dom';
import MyPetsCard from '../../components/MyPetsCard/MyPetsCard';
import UserCard from '../../components/UserCard/UserCard';
import AddPetButton from '../../components/AddPetButton/AddPetButton';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../Redux/pets/petsSelectors';
import { useEffect, useState } from 'react';
import { fetchPets } from '../../Redux/pets/petsOperation';
import Congrats from '../../components/Modals/Congrats/Congrats';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';
import { getIsLoggedIn } from '../../Redux/auth/auth-selectors';
import Leaving from '../../components/Modals/Leaving/Leaving';

const UserPage = () => {
  const dispatch = useDispatch();
  const petsList = useSelector(getPets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  const isLoadingPets = useSelector((state) => state.pets.isLoading);

  const location = useLocation();

  const [isCongratsModalOpen, setShowCongratsModal] = useState(false);
  const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);

  const onTogleLeavingModal = () => {
    setLeavingModalOpen(!isLeavingModalOpen);
  };

  useEffect(() => {
    if (location.state && location.state.fromPage === '/YourPet/register') {
      setShowCongratsModal(true);
    }
  }, [location]);

  const handleCloseCongratsModal = () => {
    setShowCongratsModal(false);
  };

  // const pets = [
  //   {
  //     id: 1,
  //     photo:
  //       'https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg',
  //     name: 'Simba',
  //     birth: '22.22.2022',
  //     type: ' Persian cat',
  //     comments:
  //       " Simba is a red Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat.",
  //   },
  //   {
  //     id: 2,
  //     photo:
  //       'https://people.com/thmb/n6EdTmvAL3TkkAqrT47caD6tUu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(723x121:725x123)/wisp-the-cat-from-tiktok-092823-1-74797b02afe7475295e1478b2cdf2883.jpg',
  //     name: 'Max',
  //     birth: '13.11.2023',
  //     type: ' Persian cat',
  //     comments:
  //       " Max is a white Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat.",
  //   },
  // ];

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <section className="py-[20px] md:py-[60px] ">
      <div className="relative container mx-auto xl:flex gap-[32px]">
        <div className="mb-[42px]">
          <h2 className="text-black text-xl font-medium font-['Manrope'] tracking-wide mb-[18px] md:text-[28px]">
            My information:
          </h2>

          {isLoggedIn && <UserCard onTogleLeavingModal={onTogleLeavingModal} />}
        </div>

        <div className="relative">
          <h2 className="text-black text-xl font-medium font-['Manrope'] tracking-wide mb-[18px] md:text-[28px]">
            My pets:
          </h2>

          <Link
            to={'/add-pet'}
            state={location}
            className="fixed right-[20px] bottom-[20px] z-1 md:absolute md:top-0 md:right-0 md:bottom-full z-1"
          >
            <AddPetButton />
          </Link>
          <div>
            {!isLoadingPets ? (
              <ul className="flex flex-col gap-[20px]">
                {petsList.length > 0 ? (
                  petsList.map((el) => (
                    <li key={el._id}>
                      <MyPetsCard
                        photo={el.imageURL}
                        name={el.name}
                        birth={el.birthDate}
                        type={el.type}
                        comments={el.comments}
                        id={el._id}
                      />
                    </li>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-black font-medium font-['Manrope'] tracking-wide">{`You haven't added any pets yet`}</p>
                  </div>
                )}
              </ul>
            ) : (
              <div className="text-center py-7">Loading</div>
            )}
          </div>
        </div>
      </div>
      <BasicModal
        isOpen={isCongratsModalOpen}
        onCloseModal={handleCloseCongratsModal}
      >
        <Congrats onCloseModal={handleCloseCongratsModal} />
      </BasicModal>

      <BasicModal
        isOpen={isLeavingModalOpen}
        onCloseModal={onTogleLeavingModal}
      >
        <Leaving onCloseModal={onTogleLeavingModal} />
      </BasicModal>
    </section>
  );
};

export default UserPage;
