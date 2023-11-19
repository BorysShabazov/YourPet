import { NavLink } from 'react-router-dom';
import Container from '../Container/container';
import Nav from '../Nav/nav';
import css from './mobileMenu.module.css';
// import { ReactComponent as Close } from '../../../img/cross-small.svg';
import { ReactComponent as Close } from '../../../images/svg/cross-small.svg';
// import { ReactComponent as Logo } from '../../../img/logo.svg';
import { ReactComponent as Logo } from '../../../images/svg/logo.svg';

import ButtonBurger from '../ButtonBurger/buttonBurger';

export default function MobileMenu({ isLogin, onToogleMobileMenu,cssHeader }) {
  return (
    <div className={css.wrapperMobileMenu}>
      <Container>
        <div className={cssHeader.wrapperHeader}>
          <NavLink to="/" className="navLink" state={{ from: location }}>
            <Logo className={cssHeader.logo} onClick={onToogleMobileMenu}/>
          </NavLink>
          <div className={cssHeader.wrapperUser}>
            <ButtonBurger onClick={onToogleMobileMenu}>
              <Close />
            </ButtonBurger>
          </div>
        </div>

      {/* {isLogin&&} */}
      <Nav onClick={onToogleMobileMenu} />
      </Container>

    </div>
  );
}
