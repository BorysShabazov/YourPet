import { useState } from 'react';
import BtnAuth from '../BtnAuth/BtnAuth';

export default function AuthNav({ onClick, isLogin, style = "" }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <ul className={`flex ${style}`}>
      <li onClick={onClick} className='text-centr'>
        <BtnAuth path="/login" onClick={isLogin} isActive={isActive} style=" border-yellow">
          Login
        </BtnAuth>
      </li>
      <li>
        <BtnAuth path="/register" onClick ={()=>setIsActive(!isActive)} isActive={!isActive} style="border-yellow">Register</BtnAuth>
      </li>
    </ul>
  );
}
