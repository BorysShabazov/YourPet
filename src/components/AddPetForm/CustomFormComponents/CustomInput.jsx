import { Field } from 'formik';
import { ErrorInputMessage } from './ErrorInputMessage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { formatRawDate } from '../../../helpers/formatRawDate';

const labelStyles =
  'relative flex flex-col text-black text-sm font-medium font-manrope md:text-xl md:leading-relaxed';
const inputStyles =
  'w-[100%] h-[40px] px-[16px] py-[8px] rounded-[40px] border border-blue justify-start items-center md:h-[48px] md:py-[12px]';
const errorInputStyle = `${inputStyles} border-red`;
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
  const [date, setDate] = useState(new Date());

  const mainStyles = error ? errorInputStyle : inputStyles;

  return (
    <label className={labelStyles}>
      {children}
      {type !== 'date' ? (
        <Field
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={mainStyles}
        />
      ) : (
        <DatePicker
          name={name}
          selected={date}
          onChange={(date) => {
            setDate(date);
            callback('birth', formatRawDate(date));
          }}
          dateFormat="dd-MM-yyyy"
          className={mainStyles}
        />
      )}

      <ErrorInputMessage inputName={name} styles={errorMessageStyles} />
    </label>
  );
};
