import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../images/svg/logo.svg';

import css from './nav.module.css';
import { firstLetterUp, transformPath } from '../helpers';

const navLinkArr = [
  { path: '/news', text: 'news' },
  { path: '/notices/sell', text: 'find pet' },
  { path: '/friends', text: 'our friends' },
];

export default function Nav({
  style = '',
  styleLogo = '',
  styleNavList = '',
  onClick,
}) {
  const location = useLocation();
  const pathPage = location.pathname;

  return (
    <div className={style}>
      <NavLink to="/" state={{ from: location }} className={`${styleLogo}`}>
        <Logo className="w-[116px] md:w-[162px]" onClick={onClick} />
      </NavLink>

      <ul className={`${styleNavList} ${css.listNav}`}>
        {navLinkArr.map(({ path, text }) => (
          <li key={text} onClick={onClick}>
            <NavLink
              to={path}
              id={text}
              state={{ from: location }}
              className={`cursor-pointer hover:opacity-80 ${
                transformPath(path) === transformPath(pathPage)
                  ? 'text-yellow'
                  : ''
              }`}
            >
              {firstLetterUp(text)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
