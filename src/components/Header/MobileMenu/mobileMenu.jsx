import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { ReactComponent as Close } from '../../../images/svg/cross-small.svg';
import { ReactComponent as Logo } from '../../../images/svg/logo.svg';
import { ReactComponent as UserImg } from '../../../images/svg/user-1.svg';
import Svg from '../../Svg/Svg';

import { Container } from '../../../ui/index';
import Nav from '../Nav/nav';
import ButtonBurger from '../ButtonBurger/buttonBurger';

import AuthNav from '../AuthNav/AuthNav';
import BtnAuth from '../BtnAuth/BtnAuth';
import { selectAuth } from '../../../Redux/auth/auth-selectors';

import { BasicModal } from '../../Modals/BasicModal/BasicModal';
import Leaving from '../../Modals/Leaving/Leaving';

export default function MobileMenu({ onToogleMobileMenu }) {
  const user = {
    name: '',
    avatarUrl: '',
  };
  const { name } = useSelector((state) => state.auth.user || '');
  console.log(name);

  const { token } = useSelector(selectAuth);
  // const token = false;

  const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);

  const handleOpenLeavingModal = () => {
    onToogleMobileMenu(false);
    setLeavingModalOpen(true);
  };
  const handleCloseLeavingModal = () => {
    setLeavingModalOpen(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0  h-screen w-screen pt-[20px] md:pt-[24px] bg-white xl:hidden">
        <Container className="flex flex-col gap-[42px] md:gap-[92px] items-centr justify-center">
          <div className="w-full flex items-center justify-between">
            <NavLink to="/" state={{ from: location }}>
              <Logo
                className="w-[116px] md:w-[162px]"
                onClick={onToogleMobileMenu}
              />
            </NavLink>

            <div className="flex gap-[24px] ">
              {token ? (
                <BtnAuth
                  path="/"
                  onClick={handleOpenLeavingModal}
                  style="absolute bottom-[20px] left-[20px] md:static flex bg-blue border-blue text-white"
                >
                  <span>Logout</span>
                  <Svg
                    size="24px"
                    id="icon-logout"
                    stroke="white"
                    fill="#54ADFF"
                  />
                </BtnAuth>
              ) : (
                <AuthNav
                  onClick={onToogleMobileMenu}
                  style="hidden md:flex gap-[20px]"
                />
              )}

              <ButtonBurger onClick={onToogleMobileMenu}>
                <Close className="stroke-current text-yellow" />
              </ButtonBurger>
            </div>
          </div>

          {!token ? (
            <AuthNav
              onClick={onToogleMobileMenu}
              style="flex-col  gap-[12px] items-center md:hidden "
            />
          ) : (
            <NavLink
              to="/user"
              className={`flex items-center justify-center gap-[12px] ${
                token ? 'pb-[44px]' : ''
              } text-yellow md:hidden`}
            >
              {!user.avatarUrl ? (
                <UserImg />
              ) : (
                <img
                  src={user.avatarUrl}
                  className="block w-[28px]h-[28px] rounded-full object-cover"
                />
              )}
              <span>{name ? name : 'Name'}</span>
            </NavLink>
          )}
          <Nav onClick={onToogleMobileMenu} styleLogo="hidden" />
        </Container>
      </div>
      <BasicModal
        isOpen={isLeavingModalOpen}
        onCloseModal={handleCloseLeavingModal}
      >
        <Leaving onCloseModal={handleCloseLeavingModal} />
      </BasicModal>
    </>
  );
}
