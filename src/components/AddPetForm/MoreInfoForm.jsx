import { useState } from 'react';
import Svg from '../Svg/Svg';

const baseButtonStyles =
  'flex flex-row align-center  px-[16px] py-[8px] rounded-[40px] justify-center items-center w-fit  text-sm font-medium font-manrope tracking-wide';
const regularButtonStyles = 'text-grey';
const hoveredButtonStyles = 'bg-blue text-background';
const labelStyles =
  'relative flex flex-col text-black text-sm font-medium font-manrope';
const inputStyles =
  'w-[100%] h-[40px] px-[16px] py-[8px] rounded-[40px] border border-blue';
const errorInputStyle = 'border-red';
const inputTitleStyles = 'mb-[4px]';
const errorMessageStyles =
  'absolute -bottom-[18px] ml-4 text-red text-xs font-normal';

const MoreInfoForm = ({
  callback,
  errors,
  category,
  sex,
  price,
  location,
  setPhoto,
  comments,
}) => {
  const [petImagePath, setPetImagePath] = useState('');

  const hasPetImage = petImagePath !== '';
  return (
    <div className="flex flex-col mb-[24px] gap-[20px]">
      <div className="relative flex flex-col gap-[16px] mb-[16px]">
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
            <Svg
              id="icon-female"
              className="flex items-center w-fit"
              fill="transparent"
              stroke={
                sex !== '' ? (sex === 'female' ? '#FFF' : '#888888') : '#F43F5E'
              }
            />
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
            <Svg
              id="icon-male"
              className="flex items-center w-fit"
              fill="transparent"
              stroke={
                sex !== '' ? (sex === 'male' ? '#FFF' : '#888888') : '#54ADFF'
              }
            />
            Male
          </label>
        </div>
        {errors.sex && (
          <div className="absolute -bottom-[18px] flex justify-center w-[100%] text-red text-xs font-normal">
            <p className="w-fit ">{errors.sex}</p>
          </div>
        )}
      </div>
      <div className="relative flex flex-col items-center gap-[13px]">
        <label
          className={`flex flex-col -mt-[16px] gap-[8px] items-center mx-auto ${
            hasPetImage ? 'pointer-events-none' : ''
          }`}
        >
          {!hasPetImage && (
            <p className="text-black text-sm font-medium font-manrope">
              Add pet's photo
            </p>
          )}

          <div
            className={`relative w-[112px] h-[112px] bg-lightBlue ${
              hasPetImage ? `bg-[url('${petImagePath}')]` : null
            } bg-cover bg rounded-[20px]`}
          >
            <Svg
              id="icon-add-cross"
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[24px] "
              fill="#54ADFF"
            />
            <input
              id="petAvatarURL"
              name="petAvatarURL"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                const localPath = URL.createObjectURL(file);
                setPhoto(file);
                setPetImagePath(localPath);
              }}
              className="w-0 h-0 invisible"
            />
          </div>
        </label>
        {hasPetImage && (
          <label htmlFor="petAvatarURL" className="flex flex-row items-center">
            <Svg
              id="icon-camera"
              className="flex items-center w-fit mr-[8px]"
              fill="transparent"
              stroke="#54ADFF"
            />
            <p className="text-black text-xs font-normal font-manrope leading-snug tracking-wide">
              Edit photo
            </p>
          </label>
        )}
        {errors.petAvatarURL && (
          <p className="absolute -bottom-[18px] break-keep text-red text-xs font-normal">
            {errors.petAvatarURL}
          </p>
        )}
      </div>
      {category !== 'own' && (
        <label className={labelStyles}>
          <p className={inputTitleStyles}>Location</p>

          <input
            id="location"
            name="location"
            type="text"
            value={location}
            placeholder="Add some location"
            onChange={callback}
            className={`${inputStyles} ${
              errors.location && errors.location !== '' ? errorInputStyle : ''
            }`}
          />
          {errors.location && (
            <p className={errorMessageStyles}>{errors.location}</p>
          )}
        </label>
      )}
      {category === 'sell' && (
        <label className={labelStyles}>
          <p className={inputTitleStyles}>Price</p>

          <input
            id="price"
            name="price"
            type="number"
            value={price}
            placeholder="Add some price"
            onChange={callback}
            className={`${inputStyles} ${
              errors.price && errors.price !== '' ? errorInputStyle : ''
            }`}
          />
          {errors.price && <p className={errorMessageStyles}>{errors.price}</p>}
        </label>
      )}
      <label className={labelStyles}>
        <p className={inputTitleStyles}>Comment</p>

        <textarea
          id="comments"
          name="comments"
          value={comments}
          placeholder="Type about your friend"
          onChange={callback}
          className={`flex w-[100%] px-[16px] py-[8px] border border-blue h-[92px] rounded-[20px] resize-none ${
            errors.comments && errors.comments !== '' ? errorInputStyle : ''
          }`}
        />
        {errors.comments && (
          <p className={errorMessageStyles}>{errors.comments}</p>
        )}
      </label>
    </div>
  );
};

export default MoreInfoForm;
