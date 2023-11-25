import { NavLink } from 'react-router-dom';
import Svg from '../../Svg/Svg';
import { firstLetterUp } from '../helpers';

export default function BtnLogout({ children, style, onClick }) {
  return (
    <NavLink
      to="/"
      className={`flex w-[165px] px-[20px] py-[8px] justify-center items-center gap-[8px] border-[2px]  rounded-[40px] cursor-pointer} bg-blue border-blue text-white hover:blue-gradient ${style} `}
      onClick={onClick}
    >
      <span>{firstLetterUp(children)}</span>
      <Svg size="24px" id="icon-logout" stroke="white" fill="transparent" />
    </NavLink>
  );
}
