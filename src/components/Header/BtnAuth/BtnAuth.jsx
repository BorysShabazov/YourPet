import { NavLink } from 'react-router-dom';

export default function BtnAuth({ children, style, path, onClick,isActive }) {
  return (
    <NavLink
      to={`${path}`}
      className={`flex w-[165px] px-[20px] py-[8px] justify-center items-center gap-[8px] border-[2px]  rounded-[40px] ${isActive?"bg-yellow text-white":""} ${style}`}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}
