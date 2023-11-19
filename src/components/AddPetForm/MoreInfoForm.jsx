const baseButtonStyles =
  'flex flex-row align-center  px-[16px] py-[8px] rounded-[40px] justify-center items-center w-fit  text-sm font-medium font-manrope tracking-wide';
const regularButtonStyles = 'text-grey';
const hoveredButtonStyles = 'bg-blue text-background';
const labelStyles = 'flex flex-col text-black text-sm font-medium font-manrope';
const inputStyles =
  'w-[100%] h-[40px] px-[16px] py-[8px] rounded-[40px] border border-blue';
const inputTitleStyles = 'mb-[4px]';

const MoreInfoForm = ({
  callback,
  category,
  sex,
  price,
  location,
  petAvatarURL,
  comments,
}) => {
  return (
    <div className="flex flex-col mb-[24px] gap-[20px]">
      <div className="flex flex-col gap-[16px] mb-[16px]">
        <p className={`${labelStyles} -mb-[8px] items-center`}>The sex</p>
        <div className="flex flex-row mx-auto gap-[16px]">
          <label
            className={`${baseButtonStyles} ${
              sex === 'female' ? hoveredButtonStyles : regularButtonStyles
            }`}
          >
            <input
              id="sex"
              name="sex"
              type="radio"
              value="female"
              onChange={callback}
              className="w-0 h-0 invisible"
            />
            <div className="mr-[12px] w-[24px] h-[24px] bg-red"></div>
            Female
          </label>
          <label
            className={`${baseButtonStyles} ${
              sex === 'male' ? hoveredButtonStyles : regularButtonStyles
            }`}
          >
            <input
              id="sex"
              name="sex"
              type="radio"
              value="male"
              onChange={callback}
              className="w-0 h-0 invisible"
            />
            <div className="mr-[12px] w-[24px] h-[24px] bg-grey"></div>
            Male
          </label>
        </div>
      </div>
      <label className="flex flex-col -mt-[16px] gap-[8px] items-center mx-auto">
        <p className={labelStyles}>Add pet's photo</p>

        <div className="w-[112px] h-[112px] bg-lightBlue rounded-[20px]">
          <input
            id="petAvatarURL"
            name="petAvatarURL"
            type="file"
            onChange={callback}
            className="w-0 h-0 invisible"
          />
        </div>

        <div className="flex flex-row items-center">
          <div className="mr-[8px] w-[24px] h-[24px] bg-red"></div>
          <p className="text-black text-xs font-normal font-manrope leading-snug tracking-wide">
            Edit photo
          </p>
        </div>
      </label>
      <label className={labelStyles}>
        <p className={inputTitleStyles}>Location</p>

        <input
          id="location"
          name="location"
          type="text"
          value={location}
          placeholder="Add some location"
          onChange={callback}
          className={inputStyles}
        />
      </label>
      <label className={labelStyles}>
        <p className={inputTitleStyles}>Price</p>

        <input
          id="price"
          name="price"
          type="text"
          value={price}
          placeholder="Add some price"
          onChange={callback}
          className={inputStyles}
        />
      </label>
      <label className={labelStyles}>
        <p className={inputTitleStyles}>Comment</p>

        <input
          id="comments"
          name="comments"
          type="text"
          value={comments}
          placeholder="Type about your friend"
          onChange={callback}
          className={`flex w-[100%] px-[16px] py-[8px] border border-blue h-[92px] rounded-[20px] items-start`}
        />
      </label>
    </div>
  );
};

export default MoreInfoForm;
