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

          <div>
            <ButtonBurger onClick={onToogleMobileMenu}>
              <Close />
            </ButtonBurger>
          </div>
        </div>

        {!isLogin ? (
          <AuthNav isLogin={onToogleIsLogin} onClick={onToogleMobileMenu} />
        ) : (
          <NavLink to="/user" className="md:flex gap-[12px] text-yellow">
            <UserImg />
            <span className="hidden md:inline-block">Name</span>
          </NavLink>
        )}
        <Nav onClick={onToogleMobileMenu} styleLogo="hidden" />
        {isLogin ? (
          <BtnAuth path="/" onClick={onLogout}>
            Logout
          </BtnAuth>
        ) : null}
      </Container>
    </div>
  );
}
