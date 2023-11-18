const labelStyles = 'flex flex-col text-black text-sm font-medium font-manrope';
const inputStyles =
  'w-[100%] h-[40px] px-[16px] py-[8px] rounded-[40px] border border-blue justify-start items-center';

const PersonalDetailsForm = ({
  callback,
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
            className={inputStyles}
          />
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
              className={inputStyles}
            />
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
              className={inputStyles}
            />
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
          className={inputStyles}
        />
      </label>
    </div>
  );
};

export default PersonalDetailsForm;
