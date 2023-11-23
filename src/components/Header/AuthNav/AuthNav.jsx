import { useState } from 'react';
import BtnAuth from '../BtnAuth/BtnAuth';
import { useLocation } from 'react-router';

const navLinkArr = [
  { path: '/login', text: 'log IN' },
  { path: '/register', text: 'Registration' },
];
const firstLetterUp = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export default function AuthNav({ onClick, style = '' }) {
  const location = useLocation();
  const pathPage = location.pathname;

  const [isActive, setIsActive] = useState(true);

  return (
    <ul className={`flex text-yellow ${style}`}>
      {navLinkArr.map(({ path, text }) => (
        <li key={text} onClick={onClick}>
          <BtnAuth
            path={path}
            id={text}
            state={{ from: location }}
            style={`border-yellow opacity-80 hover:opacity-100  ${
              path === pathPage ? 'text-white bg-yellow' : ''
            }`}
          >
            {firstLetterUp(text)}
          </BtnAuth>
        </li>
      ))}

      {/* <li onClick={onClick} className="text-centr">
        <BtnAuth
          path="/login"
          onClick={() => {
            setIsActive(!isActive);
          }}
          isActive={isActive}
          style="border-yellow "
        >
        <span>Log IN</span>  
        </BtnAuth>
      </li>
      <li onClick={onClick}>
        <BtnAuth
          path="/register"
          onClick={() => {
            setIsActive(!isActive);
          }}
          isActive={!isActive}
          style="border-yellow"
        >
         Registration
        </BtnAuth>
      </li> */}
    </ul>
  );
}
