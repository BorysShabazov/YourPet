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
    <Container>
      <div className={css.wrapperMobileMenu}>
        <div className={cssHeader.wrapperHeader}>
          <NavLink to="/" className="navLink" state={{ from: location }}>
            <Logo className={cssHeader.logo} onClick={onToogleMobileMenu} />
          </NavLink>

          <div className={cssHeader.wrapperUser}>
            {isLogin ? (
              <BtnAuth path="/" onClick={onLogout}>
                Logout
              </BtnAuth>
            ) : null}

            <ButtonBurger onClick={onToogleMobileMenu}>
              <Close />
            </ButtonBurger>
          </div>
        </div>

        {!isLogin ? (
          <AuthNav isLogin={onToogleIsLogin} onClick={onToogleMobileMenu} />
        ) : (
          <UserImg />
        )}
        <Nav onClick={onToogleMobileMenu} />
      </div>
    </Container>
  );
}
