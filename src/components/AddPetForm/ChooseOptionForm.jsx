import { Field } from 'formik';
import { ErrorInputMessage } from './ErrorInputMessage';

const baseButtonStyles =
  'px-[16px] py-[8px] rounded-[40px] justify-center items-center w-fit  text-sm font-medium font-manrope tracking-wide';
const regularButtonStyles = 'bg-lightBlue text-blue';
const hoveredButtonStyles = 'bg-blue text-background';

const ChooseOptionSection = ({ category, schemas }) => {
  return (
    <div className="relative flex flex-col mb-[45px] gap-[12px] md:mb-[87px]">
      <label
        className={`${baseButtonStyles} ${
          category === 'own' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <Field
          name="category"
          type="radio"
          value="own"
          className="w-0 h-0 invisible"
        />
        your pet
      </label>
      <label
        className={`${baseButtonStyles} ${
          category === 'sell' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <Field
          name="category"
          type="radio"
          value="sell"
          className="w-0 h-0 invisible"
        />
        sell
      </label>
      <label
        className={`${baseButtonStyles} ${
          category === 'lost' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <Field
          name="category"
          type="radio"
          value="lost"
          className="w-0 h-0 invisible"
        />
        lost
      </label>
      <label
        className={`${baseButtonStyles} ${
          category === 'found' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <Field
          name="category"
          type="radio"
          value="found"
          className="w-0 h-0 invisible"
        />
        found
      </label>
      <label
        className={`${baseButtonStyles} ${
          category === 'good-hands' ? hoveredButtonStyles : regularButtonStyles
        }`}
      >
        <Field
          name="category"
          type="radio"
          value="good-hands"
          className="w-0 h-0 invisible"
        />
        in good hands
      </label>
      <ErrorInputMessage inputName={'category'} />
    </div>
  );
};

export default ChooseOptionSection;
