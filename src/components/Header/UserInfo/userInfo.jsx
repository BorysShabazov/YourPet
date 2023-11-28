import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../../Redux/auth/auth-selectors';
import Svg from '../../Svg/Svg';
import { firstLetterUp } from '../helpers';

export default function UserInfo({ style, styleName, onClick }) {
  const { name = '', avatarURL = '' } = useSelector(getUser) ?? {};

  return (
    <NavLink to="/user" className={` ${style}`} onClick={onClick}>
      {!avatarURL ? (
        <Svg id="icon-user" size="28px" stroke="#FFC107" fill="transparent" />
      ) : (
        <img
          src={avatarURL}
          className="block w-[44px] h-[44px] border-[1px] rounded-full border-yellow object-cover"
        />
      )}
      <span className={styleName}>{name ? firstLetterUp(name) : 'Name'}</span>
    </NavLink>
  );
}
