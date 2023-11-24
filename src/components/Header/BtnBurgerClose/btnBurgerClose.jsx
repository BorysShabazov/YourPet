import Svg from '../../Svg/Svg';

export default function BtnBurgerClose({ id, onClick }) {
  return (
    <button
      type="button"
      className="flex items-center border-none bg-inherit p-0 xl:hidden"
      onClick={onClick}
    >
      <Svg id={id} size="24px" stroke="#FFC107" fill="transparent" />
    </button>
  );
}
