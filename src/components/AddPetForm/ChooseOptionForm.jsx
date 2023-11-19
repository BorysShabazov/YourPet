const baseButtonStyles =
  'px-[16px] py-[8px] rounded-[40px] justify-center items-center w-fit  text-sm font-medium font-manrope tracking-wide';
const regularButtonStyles = 'bg-lightBlue text-blue';
const hoveredButtonStyles = 'bg-blue text-background';

const ChooseOptionSection = ({ callback, category }) => {
  return (
    <div className="flex flex-col mb-[45px] gap-[12px]">
      <label
        className={`${baseButtonStyles} ${
          category === 'own' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <input
          id="category"
          name="category"
          type="radio"
          value="own"
          onChange={callback}
          className="w-0 h-0 invisible"
        />
        your pet
      </label>
      <label
        className={`${baseButtonStyles} ${
          category === 'sell' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <input
          id="category"
          name="category"
          type="radio"
          value="sell"
          onChange={callback}
          className="w-0 h-0 invisible"
        />
        sell
      </label>
      <label
        className={`${baseButtonStyles} ${
          category === 'lost' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <input
          id="category"
          name="category"
          type="radio"
          value="lost"
          onChange={callback}
          className="w-0 h-0 invisible"
        />
        lost
      </label>
      <label
        className={`${baseButtonStyles} ${
          category === 'found' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <input
          id="category"
          name="category"
          type="radio"
          value="found"
          onChange={callback}
          className="w-0 h-0 invisible"
        />
        found
      </label>
      <label
        className={`${baseButtonStyles} ${
          category === 'good-hands' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <input
          id="category"
          name="category"
          type="radio"
          value="good-hands"
          onChange={callback}
          className="w-0 h-0 invisible"
        />
        in good hands
      </label>
    </div>
  );
};

export default ChooseOptionSection;
