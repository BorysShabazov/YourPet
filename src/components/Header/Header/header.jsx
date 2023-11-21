import { NavLink } from 'react-router-dom';

import { ReactComponent as UserImg } from '../../../images/svg/user-1.svg';
import { ReactComponent as BurgerMenu } from '../../../images/svg/menu-hamburger.svg';

import ButtonBurger from '../ButtonBurger/buttonBurger';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/mobileMenu';
import Nav from '../Nav/nav';
import { Container } from '../../../ui/index';
import AuthNav from '../AuthNav/AuthNav';
import BtnAuth from '../BtnAuth/BtnAuth';
import Svg from '../../Svg/Svg';
import { selectAuth } from '../../../Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function Header() {
  const user = {
    name: '',
    avatarUrl: '',
  };

  const { token } = useSelector(selectAuth);

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
                  onClick={onLogout}
                  style="hidden xl:flex bg-blue border-blue text-white"
                >
                  <span>Logout</span>{' '}
                  <Svg
                    size="24px"
                    id="icon-logout"
                    stroke="white"
                    fill="#54ADFF"
                  />
                </BtnAuth>
                <NavLink to="/user" className="md:flex gap-[12px] text-yellow">
                  {!user.avatarUrl ? (
                    <UserImg />
                  ) : (
                    <img
                      src={user.avatarUrl}
                      className="block w-[28px]h-[28px] rounded-full object-cover"
                    />
                  )}
                  <span className="hidden md:inline-block">
                    {user.name ? user.name : "Name"}
                  </span>
                </NavLink>
              </div>
            ) : (
              <AuthNav
                onClick={onToogleIsLogin}
                style="hidden md:flex  gap-[20px]"
              />
            )}
            <ButtonBurger onClick={onToogleMobileMenu}>
              <BurgerMenu className="stroke-current text-yellow" />
            </ButtonBurger>
          </div>
        </div>

        {isMobilMenuActive && (
          <MobileMenu
            onToogleMobileMenu={onToogleMobileMenu}
            isLogin={token}
            onToogleIsLogin={onToogleIsLogin}
          />
        )}
      </Container>
    </header>
  );
}
