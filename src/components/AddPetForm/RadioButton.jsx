import { Field } from 'formik';

const baseButtonStyles =
  'px-[16px] py-[8px] rounded-[40px] justify-center items-center w-fit  text-sm font-medium font-manrope tracking-wide';
const regularButtonStyles = 'bg-lightBlue text-blue';
const hoveredButtonStyles = 'bg-blue text-background';

export const RadioButton = ({ category, name, value, children }) => (
  <label
    className={`${baseButtonStyles} ${
      category === value ? hoveredButtonStyles : regularButtonStyles
    }`}
  >
    <Field
      name={name}
      type="radio"
      value={value}
      className="w-0 h-0 invisible"
    />
    {children}
  </label>
);
