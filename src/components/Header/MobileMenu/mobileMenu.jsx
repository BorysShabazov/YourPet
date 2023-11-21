import { NavLink } from 'react-router-dom';

import { Container } from '../../../ui/index';
import Nav from '../Nav/nav';
import ButtonBurger from '../ButtonBurger/buttonBurger';

import { ReactComponent as Close } from '../../../images/svg/cross-small.svg';
import { ReactComponent as Logo } from '../../../images/svg/logo.svg';
import { ReactComponent as UserImg } from '../../../images/svg/user-1.svg';

import css from './mobileMenu.module.css';
import AuthNav from '../AuthNav/AuthNav';
import BtnAuth from '../BtnAuth/BtnAuth';
import Svg from '../../Svg/Svg';

export default function MobileMenu({
  isLogin,
  onToogleMobileMenu,
  cssHeader,
  onToogleIsLogin,
}) {
  const onLogout = () => {
    onToogleMobileMenu();

    onToogleIsLogin();
  };
  return (
    <div className={css.wrapperMobileMenu}>
      <Container>
        <div className="w-full flex items-centr justify-between">
          <NavLink to="/" state={{ from: location }}>
            <Logo
              className="w-[116px] md:w-[162px]"
              onClick={onToogleMobileMenu}
            />
          </NavLink>

          <div className="flex gap-[24px] ">
            {isLogin ? (
              <BtnAuth
                path="/"
                onClick={onLogout}
                style="hidden md:flex bg-blue border-blue text-white"
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
                isLogin={onToogleIsLogin}
                onClick={onToogleMobileMenu}
                style="hidden md:flex   text-centr gap-[12px]"
              />
            )}

            <ButtonBurger onClick={onToogleMobileMenu}>
              <Close />
            </ButtonBurger>
          </div>
        </div>

        {!isLogin ? (
          <AuthNav
            isLogin={onToogleIsLogin}
            onClick={onToogleMobileMenu}
            style="flex-col w-full text-centr gap-[12px] md:hidden "
          />
        ) : (
          <NavLink to="/user" className="flex items-center justify-center gap-[12px] text-yellow md:hidden">
            <UserImg />
            <span className="inline-block">Name</span>
          </NavLink>
        )}
        <Nav onClick={onToogleMobileMenu} styleLogo="hidden" />
      </Container>
    </div>
  );
}
