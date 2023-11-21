const labelStyles =
  'relative flex flex-col text-black text-sm font-medium font-manrope';
const inputStyles =
  'w-[100%] h-[40px] px-[16px] py-[8px] rounded-[40px] border border-blue justify-start items-center';
const errorInputStyle = 'border-red';
const errorMessageStyles =
  'absolute -bottom-[18px] ml-4 text-red text-xs font-normal';
const PersonalDetailsForm = ({
  callback,
  errors,
  category,
  title,
  name,
  birth,
  type,
}) => {
  return (
    <div className="flex flex-col mb-[24px] gap-[20px]">
      {category !== 'own' && (
        <label className={labelStyles}>
          Title of add
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            placeholder="Title of add"
            onChange={callback}
            className={`${inputStyles} ${
              errors.title && errors.title !== '' ? errorInputStyle : ''
            }`}
          />
          {errors.title && <p className={errorMessageStyles}>{errors.title}</p>}
        </label>
      )}
      {category !== 'found' && (
        <>
          <label className={labelStyles}>
            Pet's name
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              placeholder="Type name pet"
              onChange={callback}
              className={`${inputStyles} ${
                errors.name && errors.name !== '' ? errorInputStyle : ''
              }`}
            />
            {errors.name && <p className={errorMessageStyles}>{errors.name}</p>}
          </label>
          <label className={labelStyles}>
            Date of birth
            <input
              id="birth"
              name="birth"
              type="text"
              value={birth}
              placeholder="Type date of birth"
              onChange={callback}
              className={`${inputStyles} ${
                errors.birth && errors.birth !== '' ? errorInputStyle : ''
              }`}
            />
            {errors.birth && (
              <p className={errorMessageStyles}>{errors.birth}</p>
            )}
          </label>
        </>
      )}

      <label className={labelStyles}>
        Type
        <input
          id="type"
          name="type"
          type="text"
          value={type}
          placeholder="Type of pet"
          onChange={callback}
          className={`${inputStyles} ${
            errors.type && errors.type !== '' ? errorInputStyle : ''
          }`}
        />
        {errors.type && <p className={errorMessageStyles}>{errors.type}</p>}
      </label>
    </div>
  );
};

export default PersonalDetailsForm;
