import { NavLink } from 'react-router-dom';
import css from './BtnAuth.module.css';

export default function BtnAuth({ children, style, path }) {
  return (
    <NavLink to={`${path}`} className={`${css.btn} ${style}`}>
      {children}
    </NavLink>
  );
}
