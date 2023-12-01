import { Link, useLocation } from 'react-router-dom';

import UserCard from '../../components/UserCard/UserCard';
import AddPetButton from '../../components/AddPetButton/AddPetButton';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Congrats from '../../components/Modals/Congrats/Congrats';
import { BasicModal } from '../../components/Modals/BasicModal/BasicModal';
import { getIsLoggedIn, getUser } from '../../Redux/auth/auth-selectors';
import Leaving from '../../components/Modals/Leaving/Leaving';
import { MyPetsList } from '../../components/MyPetsList/MyPetsList';

const UserPage = () => {
  const location = useLocation();
  const { email } = useSelector(getUser) || {};
  const [isCongratsModalOpen, setShowCongratsModal] = useState(false);
  const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);

  const [limitAddButton, setLimitAddButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - (scrollY + windowHeight) <= 100) {
        setLimitAddButton(false);
      } else {
        setLimitAddButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onTogleLeavingModal = () => {
    setLeavingModalOpen(!isLeavingModalOpen);
  };

  useEffect(() => {
    if (!email) return;
    const hasUserSeenModal = sessionStorage.getItem(
      `hasUserSeenModal_${email}`,
    );
    if (
      (location.state &&
        location.state.fromPage === '/YourPet/register' &&
        !hasUserSeenModal) ||
      hasUserSeenModal === 'false'
    ) {
      setShowCongratsModal(true);
      sessionStorage.setItem(`hasUserSeenModal_${email}`, 'true');
    }
  }, [location, email]);

  const handleCloseCongratsModal = () => {
    setShowCongratsModal(false);
  };

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <section className="py-[20px] md:py-[60px] ">
      <div className="relative container mx-auto xl:flex gap-[32px]">
        <div className="mb-[42px]">
          <h2 className="text-black text-xl font-medium font-['Manrope'] tracking-wide mb-[18px] md:text-[28px] md:mb-[24px]">
            My information:
          </h2>

          {isLoggedIn && <UserCard onTogleLeavingModal={onTogleLeavingModal} />}
        </div>

        <div className="relative w-full">
          <h2 className="text-black text-xl font-medium font-['Manrope'] tracking-wide mb-[18px] md:text-[28px] md:mb-[24px]">
            My pets:
          </h2>
          <div
            className={`z-10 fixed right-[20px] ${
              !limitAddButton ? 'bottom-[60px] ' : 'bottom-[20px] '
            } md:absolute md:top-[-10px] md:right-0 md:bottom-full`}
          >
            <AddPetButton location={location} />
          </div>
          {isLoggedIn && <MyPetsList />}
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
