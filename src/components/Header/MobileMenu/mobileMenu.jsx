import { useSelector } from 'react-redux';
import { useState } from 'react';

import { Container } from '../../../ui/index';
import Nav from '../Nav/nav';

import AuthNav from '../AuthNav/AuthNav';

import { selectAuth } from '../../../Redux/auth/auth-selectors';

import { BasicModal } from '../../Modals/BasicModal/BasicModal';
import Leaving from '../../Modals/Leaving/Leaving';
import BtnLogout from '../BtnLogout/BtnLogout';
import UserInfo from '../UserInfo/userInfo';
import BtnBurgerClose from '../BtnBurgerClose/btnBurgerClose';

export default function MobileMenu({ onToogleMobileMenu }) {
  const { token } = useSelector(selectAuth);

  const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);

  const onToogleLeavingModal = () => {
    setLeavingModalOpen(!isLeavingModalOpen);
  };

  return (
    <>
      <div className="absolute bg-background top-0 left-0  h-screen w-screen pt-[20px] md:pt-[24px] xl:hidden ">
        <Container className="bg-transparent
         relative h-screen flex flex-col gap-[42px]  md:gap-[92px] items-centr bg-background ">
          <div className="flex  items-center justify-between w-full h-[28px] md:h-[44px]">
            <Nav styleNavList="hidden" onClick={onToogleMobileMenu} />
            <div className="flex gap-[24px] ">
              {token ? (
                <BtnLogout
                  onClick={onToogleLeavingModal}
                  style="absolute bottom-[40px] left-[20px] md:static flex"
                >
                  log out
                </BtnLogout>
              ) : (
                <AuthNav
                  onClick={onToogleMobileMenu}
                  style="hidden md:flex gap-[20px]"
                />
              )}
              <BtnBurgerClose id="icon-cross" onClick={onToogleMobileMenu} />
            </div>
          </div>

          {!token ? (
            <AuthNav
              onClick={onToogleMobileMenu}
              style="flex-col  gap-[12px] items-center md:hidden "
            />
          ) : (
              <UserInfo
                onClick={onToogleMobileMenu}
                style={`${token ? 'flex justify-center items-center gap-[12px] pb-[44px]' : ''} text-yellow md:hidden`}  />
          )}
          <Nav onClick={onToogleMobileMenu} styleLogo="hidden" />
        </Container>
      </div>
      <BasicModal
        isOpen={isLeavingModalOpen}
        onCloseModal={onToogleLeavingModal}
      >
        <Leaving onCloseModal={onToogleLeavingModal} />
      </BasicModal>
    </>
  );
}
