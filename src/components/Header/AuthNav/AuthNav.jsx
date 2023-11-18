import BtnAuth from '../BtnAuth/BtnAuth';
import css from './AuthNav.module.css'

export default function AuthNav({onClick,style=null}) {
  return (
    <ul className={`${css.listUserNav} ${style} `}
    >
      <li onClick={onClick}>
        <BtnAuth path="/login">Login</BtnAuth>
      </li>
      <li>
        <BtnAuth path="/register">Register</BtnAuth>
      </li>
    </ul>
  );
}

