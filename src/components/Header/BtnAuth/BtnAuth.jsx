import { NavLink } from 'react-router-dom';
import css from './BtnAuth.module.css';

export default function BtnAuth({ children, style, path, onClick }) {
  return (
    <NavLink to={`${path}`} className={`${css.btn} ${style}`} onClick={onClick}>
      {children}
    </NavLink>
  );
}
