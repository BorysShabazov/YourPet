import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

import BtnLogout from '../BtnLogout/BtnLogout';

import MobileMenu from '../MobileMenu/mobileMenu';
import { BasicModal } from '../../Modals/BasicModal/BasicModal';
import Leaving from '../../Modals/Leaving/Leaving';

import Nav from '../Nav/nav';
import { Container } from '../../../ui/index';
import AuthNav from '../AuthNav/AuthNav';

import { selectAuth } from '../../../Redux/auth/auth-selectors';
import UserInfo from '../UserInfo/userInfo';
import BtnBurgerClose from '../BtnBurgerClose/btnBurgerClose';

const mobileMenuRoot = document.querySelector('#mobile-menu');

export default function Header() {
  const { token } = useSelector(selectAuth);

  const [isMobilMenuActive, setIsMobilMenuActive] = useState(false);
  const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);

  useEffect(() => {
    if (isMobilMenuActive || isLeavingModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobilMenuActive, isLeavingModalOpen]);

  const onToogleMobileMenu = () => {
    setIsMobilMenuActive(!isMobilMenuActive);
    console.log('toggle');
  };

  const onToogleLeavingModal = () => {
    setLeavingModalOpen(!isLeavingModalOpen);
  };

  return (
    <>
      <header className="relative pt-[20px] md:pt-[24px] xl:pt-[20px] bg-[#FEF9F9]">
        <Container>
          <div className="flex items-center justify-between">
            <Nav
              style="flex gap-[160px]"
              styleLogo="block"
              styleNavList="hidden xl:flex"
            />

            <div className="smOnly:h-[28px] flex gap-[8px] md:gap-[24px]">
              {token ? (
                <div className="hidden md:flex gap-6 items-center">
                  <BtnLogout
                    style="hidden xl:flex"
                    onClick={onToogleLeavingModal}
                  >
                    logout
                  </BtnLogout>
                  <UserInfo
                    style="md:flex  gap-[12px] items-center md:h-[44px] text-yellow"
                    styleName="hidden md:inline-block"
                  />
                </div>
              ) : (
                <AuthNav style="hidden md:flex  gap-[20px]" />
              )}
              <BtnBurgerClose
                style
                id="icon-menu-hamburger"
                onClick={onToogleMobileMenu}
              />
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
        onCloseModal={onToogleLeavingModal}
      >
        <Leaving onCloseModal={onToogleLeavingModal} />
      </BasicModal>
    </>
  );
}
