import { NavLink } from 'react-router-dom';

import { ReactComponent as UserImg } from '../../../images/svg/user-1.svg';
import { ReactComponent as BurgerMenu } from '../../../images/svg/menu-hamburger.svg';

import ButtonBurger from '../ButtonBurger/buttonBurger';
import { useEffect, useState } from 'react';
import MobileMenu from '../MobileMenu/mobileMenu';
import Nav from '../Nav/nav';
import { Container } from '../../../ui/index';
import AuthNav from '../AuthNav/AuthNav';
import BtnAuth from '../BtnAuth/BtnAuth';
import Svg from '../../Svg/Svg';
import { selectAuth } from '../../../Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import { BasicModal } from '../../Modals/BasicModal/BasicModal';
import Leaving from '../../Modals/Leaving/Leaving';

import { createPortal } from 'react-dom';
const mobileMenuRoot = document.querySelector('#mobile-menu');

export default function Header() {
  const user = {
    name: '',
    avatarUrl: '',
  };

  const { token } = useSelector(selectAuth);
  const { name } = useSelector((state) => state.auth.user || '');

  const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);
  const [isMobilMenuActive, setIsMobilMenuActive] = useState(false);

  useEffect(() => {
    if (isMobilMenuActive) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobilMenuActive]);

  const onToogleMobileMenu = () => {
    setIsMobilMenuActive(!isMobilMenuActive);
  };

  const handleOpenLeavingModal = () => {
    setLeavingModalOpen(true);
  };
  const handleCloseLeavingModal = () => {
    setLeavingModalOpen(false);
  };

  return (
    <>
      <header className="pt-[20px] md:pt-[24px] xl:pt-[20px] relative">
        <Container>
          <div className="flex items-center justify-between">
            <Nav
              style="flex gap-[160px]"
              styleLogo="block"
              styleNavList="hidden xl:flex"
            />

            <div className="flex gap-[8px] md:gap-[24px]">
              {token ? (
                <div className="hoidden md:flex gap-6 items-center">
                  <BtnAuth
                    path="/"
                    onClick={handleOpenLeavingModal}
                    style="hidden xl:flex bg-blue border-blue text-white"
                  >
                    <span>Logout</span>
                    <Svg
                      size="24px"
                      id="icon-logout"
                      stroke="white"
                      fill="#54ADFF"
                    />
                  </BtnAuth>
                  <NavLink
                    to="/user"
                    className="md:flex gap-[12px] text-yellow"
                  >
                    {!user.avatarUrl ? (
                      <UserImg />
                    ) : (
                      <img
                        src={user.avatarUrl}
                        className="block w-[28px]h-[28px] rounded-full border-yellow object-cover"
                      />
                    )}
                    <span className="hidden md:inline-block">
                      {name ? name : 'Name'}
                    </span>
                  </NavLink>
                </div>
              ) : (
                <AuthNav style="hidden md:flex  gap-[20px]" />
              )}
              <ButtonBurger onClick={onToogleMobileMenu}>
                <BurgerMenu className="stroke-current text-yellow" />
              </ButtonBurger>
            </div>
          </div>

          {isMobilMenuActive &&
            createPortal(
              <MobileMenu onToogleMobileMenu={onToogleMobileMenu} />,
              mobileMenuRoot,
            )}
        </Container>
      </header>
      <BasicModal
        isOpen={isLeavingModalOpen}
        onCloseModal={handleCloseLeavingModal}
      >
        <Leaving onCloseModal={handleCloseLeavingModal} />
      </BasicModal>
    </>
  );
}
