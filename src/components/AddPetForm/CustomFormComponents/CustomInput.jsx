import { Field } from 'formik';
import { ErrorInputMessage } from './ErrorInputMessage';
import DatePicker from 'react-datepicker';

const labelStyles =
  'relative flex flex-col text-black text-sm font-medium font-manrope md:text-xl md:leading-relaxed';
const inputStyles =
  'w-[100%] h-[40px] px-[16px] py-[8px] rounded-[40px] border border-blue justify-start items-center md:h-[48px] md:py-[12px]';
const errorInputStyle = 'border-red';
const errorMessageStyles =
  'absolute -bottom-[18px] ml-4 text-red text-xs font-normal';

export const CustomInput = ({
  name,
  type = 'text',
  value,
  placeholder,
  callback,
  error,
  children,
}) => {
  return (
    <label className={labelStyles}>
      {children}
      {type !== 'date' ? (
        <Field
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={`${inputStyles} ${error ? errorInputStyle : ''}`}
        />
      ) : (
        <DatePicker
          name={name}
          selected={value}
          onChange={(date) => {
            callback('birth', date);
          }}
          dateFormat="dd-MM-yyyy"
          className={`${inputStyles} ${error ? errorInputStyle : ''}`}
        />
      )}

      <ErrorInputMessage inputName={name} styles={errorMessageStyles} />
    </label>
  );
};
