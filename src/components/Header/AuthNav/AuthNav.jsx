import BtnAuth from '../BtnAuth/BtnAuth';
import { useLocation } from 'react-router';
import Svg from '../../Svg/Svg';
import { firstLetterUp } from '../helpers';

const navLinkArr = [
  { path: '/login', text: 'log IN',svg:"icon-pawprint"},
  { path: '/register', text: 'registration',svg:"" },
];
export default function AuthNav({ onClick, style = '' }) {
  const location = useLocation();
  const pathPage = location.pathname;

  return (
    <ul className={`flex text-yellow ${style}`}>
      {navLinkArr.map(({ path, text,svg }, idx) => (
        <li key={text} onClick={onClick} className=' rounded-[40px] overflow-hidden'>
          <BtnAuth
            path={path}
            id={text}
            state={{ from: location }}
            style={`border-yellow  ${
              path === pathPage ? 'text-white bg-yellow' : ''
            } hover:orange-gradient hover:text-white`}
          >
            {firstLetterUp(text)}
            {svg ? (
              <Svg className='fill-current'
                id={svg}
              />
            ) : null}
          </BtnAuth>
        </li>
      ))}
    </ul>
  );
}
