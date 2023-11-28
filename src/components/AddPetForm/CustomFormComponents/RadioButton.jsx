import { Field } from 'formik';

const baseButtonStyles =
  'px-[16px] py-[8px] rounded-[40px] justify-center items-center w-fit  text-sm font-medium font-manrope tracking-wide cursor-pointer';
const regularButtonStyles = `${baseButtonStyles} bg-lightBlue text-blue`;
const hoveredButtonStyles = `${baseButtonStyles} bg-blue text-background`;

export const RadioButton = ({ category, name, value, style, children }) => {
  const mainRadioButtonStyle =
    category === value ? hoveredButtonStyles : regularButtonStyles;
  return (
    <label className={style ? style : mainRadioButtonStyle}>
      <Field
        name={name}
        type="radio"
        value={value}
        className="w-0 h-0 invisible"
      />
      {children}
    </label>
  );
};
