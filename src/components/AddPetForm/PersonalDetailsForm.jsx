import { Field } from 'formik';
import { ErrorInputMessage } from './ErrorInputMessage';

const labelStyles =
  'relative flex flex-col text-black text-sm font-medium font-manrope md:text-xl md:leading-relaxed';
const inputStyles =
  'w-[100%] h-[40px] px-[16px] py-[8px] rounded-[40px] border border-blue justify-start items-center md:h-[48px] md:py-[12px]';
const errorInputStyle = 'border-red';
const errorMessageStyles =
  'absolute -bottom-[18px] ml-4 text-red text-xs font-normal';

const PersonalDetailsForm = ({
  errors,
  category,
  title,
  name,
  birth,
  type,
}) => {
  return (
    <div className="flex flex-col mb-[24px] gap-[20px] md:gap-[24px] md:mb-[40px]">
      {category !== 'own' && (
        <label className={labelStyles}>
          Title of add
          <Field
            name="title"
            type="text"
            value={title}
            placeholder="Title of add"
            className={`${inputStyles} ${
              errors.title && errors.title !== '' ? errorInputStyle : ''
            }`}
          />
          <ErrorInputMessage inputName={'title'} styles={errorMessageStyles} />
        </label>
      )}
      {category !== 'found' && (
        <>
          <label className={labelStyles}>
            Pet's name
            <Field
              name="name"
              type="text"
              value={name}
              placeholder="Type name pet"
              className={`${inputStyles} ${
                errors.name && errors.name !== '' ? errorInputStyle : ''
              }`}
            />
            <ErrorInputMessage inputName={'name'} styles={errorMessageStyles} />
          </label>
          <label className={labelStyles}>
            Date of birth
            <Field
              name="birth"
              type="text"
              value={birth}
              placeholder="Type date of birth"
              className={`${inputStyles} ${
                errors.birth && errors.birth !== '' ? errorInputStyle : ''
              }`}
            />
            <ErrorInputMessage
              inputName={'birth'}
              styles={errorMessageStyles}
            />
          </label>
        </>
      )}

      <label className={labelStyles}>
        Type
        <Field
          name="type"
          type="text"
          value={type}
          placeholder="Type of pet"
          className={`${inputStyles} ${
            errors.type && errors.type !== '' ? errorInputStyle : ''
          }`}
        />
        <ErrorInputMessage inputName={'type'} styles={errorMessageStyles} />
      </label>
    </div>
  );
};

export default PersonalDetailsForm;
