import BtnAuth from '../BtnAuth/BtnAuth';
import { useLocation } from 'react-router';
import Svg from '../../Svg/Svg';
import { firstLetterUp } from '../helpers';

const navLinkArr = [
  { path: '/login', text: 'log IN' },
  { path: '/register', text: 'registration' },
];
export default function AuthNav({ onClick, style = '' }) {
  const location = useLocation();
  const pathPage = location.pathname;

  return (
    <ul className={`flex text-yellow ${style}`}>
      {navLinkArr.map(({ path, text }, idx) => (
        <li key={text} onClick={onClick}>
          <BtnAuth
            path={path}
            id={text}
            state={{ from: location }}
            style={`border-yellow hover:opacity-80  ${
              path === pathPage ? 'text-white bg-yellow' : ''
            }`}
          >
            {firstLetterUp(text)}
            {idx === 0 ? (
              <Svg
                id="icon-pawprint"
                fill={`${path === pathPage ? 'white' : '#FFC107'}`}
              />
            ) : null}
          </BtnAuth>
        </li>
      ))}
    </ul>
  );
}
