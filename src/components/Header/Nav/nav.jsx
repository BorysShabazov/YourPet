import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../images/svg/logo.svg';

import css from './nav.module.css';

export default function Nav({ style,styleLogo, onClick }) {
  const location = useLocation();

  // const navLinkArr=[{path:"/news",text:"news"},{path:"/news",text:"news"},{path:"/news",text:"news"}]

  return (
    <div className={style }>
      <NavLink to="/" state={{ from: location } } className={styleLogo}>
        <Logo className="w-[116px] md:w-[162px]" />
      </NavLink>

      <ul className={`${css.listNav} `}>
        <li onClick={onClick}>
          <NavLink to="/news" className="navLink" state={{ from: location }}>
            news
          </NavLink>
        </li>
        <li onClick={onClick}>
          <NavLink
            to="/notices/sell"
            className="navLink"
            state={{ from: location }}
          >
            find pet
          </NavLink>
        </li>
        <li onClick={onClick}>
          <NavLink to="/friends" className="navLink" state={{ from: location }}>
            our friends
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
