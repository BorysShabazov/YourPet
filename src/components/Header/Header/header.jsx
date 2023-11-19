import { NavLink, useLocation } from 'react-router-dom';

import Container from '../Container/container';
import { ReactComponent as Logo } from '../../../images/svg/logo.svg';
import { ReactComponent as UserImg } from '../../../images/svg/user-1.svg';
import { ReactComponent as BurgerMenu } from '../../../images/svg/menu-hamburger.svg';

import css from './hader.module.css';
import ButtonBurger from '../ButtonBurger/buttonBurger';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/mobileMenu';
import Nav from '../Nav/nav';

export default function Header({isMobileActive}) {
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);
  const [isMobailMenuActive, setIsMobailMenuActive] = useState(isMobileActive||false);
  const onToogleIsLogin = () => {
    setIsLogin(!isLogin);
  };
  const onToogleMobileMenu = () => {
setIsMobailMenuActive(!isMobailMenuActive) 
console.log("hello") };
  return (
    <header className={`${css.header} `}>
      <Container>
        <div className={css.wrapperHeader}>
          <NavLink to="/" className="navLink" state={{ from: location }}>
            <Logo className={css.logo} />
          </NavLink>
          <Nav style={css.navDescktop} />
          <div className={css.wrapperUser}>
            {isLogin&!isMobailMenuActive? <UserImg />:null}
          <ButtonBurger onClick={onToogleMobileMenu}  >
              <BurgerMenu className={css.burgerImg} />
            </ButtonBurger>
          </div>
        </div>

        {isMobailMenuActive&&<MobileMenu onToogleMobileMenu={onToogleMobileMenu} cssHeader={css}/>}

      </Container>
    </header>
  );
}
