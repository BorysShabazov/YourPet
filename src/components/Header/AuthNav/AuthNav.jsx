import { useState } from 'react';
import BtnAuth from '../BtnAuth/BtnAuth';

export default function AuthNav({ onClick, style = '' }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <ul className={`flex ${style}`}>
      <li onClick={onClick} className="text-centr">
        <BtnAuth
          path="/login"
          onClick={() => {
            setIsActive(!isActive);
          }}
          isActive={isActive}
          style="border-yellow"
        >
          Login
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
          Register
        </BtnAuth>
      </li>
    </ul>
  );
}
