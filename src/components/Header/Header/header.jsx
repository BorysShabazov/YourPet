import { Link, NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../images/svg/logo.svg';
import { ReactComponent as UserImg } from '../../../images/svg/user-1.svg';
import { ReactComponent as BurgerMenu } from '../../../images/svg/menu-hamburger.svg';

import css from './hader.module.css';
import ButtonBurger from '../ButtonBurger/buttonBurger';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/mobileMenu';
import Nav from '../Nav/nav';
import { Container } from '../../../ui/index';
import AuthNav from '../AuthNav/AuthNav';
import BtnAuth from '../BtnAuth/BtnAuth';

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
    <header className={`${css.header} `}>
      <Container>
        <div className={css.wrapperHeader}>
          <NavLink to="/" className="navLink" state={{ from: location }}>
            <Logo className={css.logo} />
          </NavLink>

          <Nav style={css.navDescktop} />

          <div className={css.wrapperUser}>
            {isLogin ? (
              <>
                <BtnAuth path="/" onClick={onLogout}>
                  Logout
                </BtnAuth>
                <Link to="/user">
                  <UserImg />
                </Link>
              </>
            ) : (
              <AuthNav
                onClick={onToogleIsLogin}
                // style={css.listUserNavHidden}
              />
            )}
            <ButtonBurger onClick={onToogleMobileMenu}>
              <BurgerMenu className={css.burgerImg} />
            </ButtonBurger>
          </div>
        </div>

        {isMobilMenuActive && (
          <MobileMenu
            onToogleMobileMenu={onToogleMobileMenu}
            cssHeader={css}
            isLogin={isLogin}
            onToogleIsLogin={onToogleIsLogin}
          />
        )}
      </Container>
    </header>
  );
}
