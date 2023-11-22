import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../images/svg/logo.svg';

import css from './nav.module.css';

export default function Nav({ style="",styleLogo="",styleNavList="", onClick }) {
  const location = useLocation();

  // const navLinkArr=[{path:"/news",text:"news"},{path:"/news",text:"news"},{path:"/news",text:"news"}]

  return (
    <div className={style}>
      <NavLink to="/" state={{ from: location } } className={`${styleLogo}`} >
        <Logo className="w-[116px] md:w-[162px]" />
      </NavLink>
      <ul className={`${styleNavList} ${css.listNav}`}>

      {/* .listNav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  font-size: 32px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0.04em;

  text-transform: capitalize;
}
@media screen and (min-width: 768px) {
  .listNav {
    gap: 60px;
    font-size: 48px;
    line-height: 66px;
  }
}

@media screen and (min-width: 1280px) {
  .listNav {
    flex-direction: row;
    gap: 40px;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
  }
}
 */}



        <li onClick={onClick}>
          <NavLink to="/news" state={{ from: location }}>
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
