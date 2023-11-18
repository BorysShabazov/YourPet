import { NavLink, useLocation } from 'react-router-dom';
import css from "./nav.module.css"


export default function Nav({ style, onClick }) {
  const location = useLocation();
  console.log('onClick ', onClick);
  return (
    <div className={style}>
      <ul className={`${css.listNav} `}>
        <li onClick={onClick}>
          <NavLink to="/news" className="navLink" state={{ from: location }}>
            news
          </NavLink>
        </li>
        <li onClick={onClick}>
          <NavLink to="/notices" className="navLink" state={{ from: location }}>
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
