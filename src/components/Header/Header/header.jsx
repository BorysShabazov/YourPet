import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as UserImg } from '../../../images/svg/user-1.svg';
import { ReactComponent as BurgerMenu } from '../../../images/svg/menu-hamburger.svg';
import { ReactComponent as Logo } from '../../../images/svg/logo.svg';

import ButtonBurger from '../ButtonBurger/buttonBurger';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/mobileMenu';
import Nav from '../Nav/nav';
import { Container } from '../../../ui/index';
import AuthNav from '../AuthNav/AuthNav';
import BtnAuth from '../BtnAuth/BtnAuth';
import Svg from '../../Svg/Svg';

export default function Header() {
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);
  const [isMobilMenuActive, setIsMobilMenuActive] = useState(false);
  const onToogleIsLogin = () => {
    setIsLogin(!isLogin);
  };
  const onToogleMobileMenu = () => {
    setIsMobilMenuActive(!isMobilMenuActive);
  };
  const onLogout = () => {
    setIsMobilMenuActive(false);

    onToogleIsLogin(false);
  };

  return (
    <header className="pt-[20px] md:pt-[24px] xl:pt-[20px] ">
      <Container>
        <div className="flex items-centr justify-between">
          <NavLink to="/" state={{ from: location }} className="md:hidden">
            <Logo className="w-[116px] md:w-[162px]" />
          </NavLink>

          <Nav style="hidden xl:flex gap-[159px] items-center" />

          <div className="flex gap-[8px] md:gap-[38px] xl:gap=[24px]">
            {isLogin ? (
              <div className="hoidden md:flex gap-6 items-center">
                <BtnAuth path="/" onClick={onLogout} style="hidden xl:flex">
                  <span>Logout</span> <Svg size="24px" id="icon-logout" />
                </BtnAuth>
                <NavLink to="/user" className="md:flex gap-[12px] text-yellow">
                  <UserImg />
                  <span className="hidden md:inline-block">Name</span>
                </NavLink>
              </div>
            ) : (
              <AuthNav onClick={onToogleIsLogin} style="hidden md:flex " />
            )}
            <ButtonBurger onClick={onToogleMobileMenu}>
              <BurgerMenu className="stroke-current text-yellow" />
            </ButtonBurger>
          </div>
        </div>

        {isMobilMenuActive && (
          <MobileMenu
            onToogleMobileMenu={onToogleMobileMenu}
            isLogin={isLogin}
            onToogleIsLogin={onToogleIsLogin}
          />
        )}
      </Container>
    </header>
  );
}
