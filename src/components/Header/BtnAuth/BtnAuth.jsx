import { NavLink } from 'react-router-dom';

export default function BtnAuth({ children, style, path, onClick }) {
  return (
    <NavLink
      to={path}
      className={`flex w-[165px] px-[20px] py-[8px] justify-center items-center gap-[8px] border-[2px]  rounded-[40px] cursor-pointer} outline-none  ${style} `}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}
