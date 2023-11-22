import { NavLink } from "react-router-dom";

export const Link = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "bg-blue inline-block text-background px-4 py-2 text-sm h-[35px] rounded-[40px] leading-normal"
        : "inline-block text-blue px-4 py-2 text-sm h-[35px] bg-lightBlue rounded-[40px] leading-normal"
    }
  >
    {children}
  </NavLink>
);
