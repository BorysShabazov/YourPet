import BtnAuth from '../BtnAuth/BtnAuth';

export default function AuthNav() {
  return (
    <ul>
      <li>
        <BtnAuth path="/login"></BtnAuth>
      </li>
      <li>
        <BtnAuth path="/register"></BtnAuth>
      </li>
    </ul>
  );
}
