import { NavLink } from 'react-router-dom';

const AuthFooter = ({ pathName }) => {
  return (
    <div className="text-center">
      <span className="text-zinc-500 text-xs font-normal tracking-wide">
        Already have an account?&nbsp;
      </span>
      <NavLink
        className="text-blue text-xs font-normal underline tracking-wide"
        to={`/${pathName}`}
      >
        {pathName}
      </NavLink>
    </div>
  );
};

export default AuthFooter;
