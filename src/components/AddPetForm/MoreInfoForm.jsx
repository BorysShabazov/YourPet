import { useState } from 'react';
import Svg from '../Svg/Svg';
import { ErrorMessage, Field } from 'formik';
import { ErrorInputMessage } from './ErrorInputMessage';

const baseButtonStyles =
  'flex flex-row align-center  px-[16px] py-[8px] rounded-[40px] justify-center items-center w-fit  text-sm text-base font-normal font-manrope tracking-wide leading-normal';
const regularButtonStyles = 'text-grey';
const hoveredButtonStyles = 'bg-blue text-background';
const inputTitleStyles = 'mb-[4px]';
const labelStyles =
  'relative flex flex-col text-black text-sm font-medium font-manrope md:text-xl md:leading-relaxed';
const inputStyles =
  'w-[100%] h-[40px] px-[16px] py-[8px] rounded-[40px] border border-blue justify-start items-center md:h-[48px] md:py-[12px]';
const errorInputStyle = 'border-red';
const errorMessageStyles =
  'absolute -bottom-[18px] ml-4 text-red text-xs font-normal';

const MoreInfoForm = ({
  errors,
  category,
  sex,
  price,
  location,
  setPhoto,
  comments,
}) => {
  const [petImagePath, setPetImagePath] = useState('');

  const chooseButtonColor = (inputValue) => {
    if (sex === '' && inputValue === 'female') return '#F43F5E';
    if (sex === '' && inputValue === 'male') return '#54ADFF';

    return sex === inputValue ? '#FFF' : '#888888';
  };

  const hasPetImage = petImagePath !== '';

  return (
    <div className="flex flex-col mb-[24px] gap-[20px] md:flex-row md:mx-[40px] md:gap-[45px] xl:gap-[80px]">
      <div>
        <div className="relative flex flex-col gap-[16px] mb-[16px]">
          <p className={`${labelStyles} -mb-[8px] items-center`}>The sex</p>
          <div className="flex flex-row mx-auto gap-[16px]">
            <label
              className={`${baseButtonStyles} ${
                sex === 'female' ? hoveredButtonStyles : regularButtonStyles
              }`}
            >
              <Field
                name="sex"
                type="radio"
                value="female"
                className="w-0 h-0 invisible"
              />
              <Svg
                id="icon-female"
                className="flex items-center w-fit"
                fill="transparent"
                stroke={chooseButtonColor('female')}
              />
              Female
            </label>
            <label
              className={`${baseButtonStyles} ${
                sex === 'male' ? hoveredButtonStyles : regularButtonStyles
              }`}
            >
              <Field
                name="sex"
                type="radio"
                value="male"
                className="w-0 h-0 invisible"
              />
              <Svg
                id="icon-male"
                className="flex items-center w-fit"
                fill="transparent"
                stroke={chooseButtonColor('male')}
              />
              Male
            </label>
          </div>

          <ErrorMessage name="sex">
            {(message) => (
              <div className="absolute -bottom-[10px] flex justify-center w-[100%] text-red text-xs font-normal">
                <p className="w-fit">{message}</p>
              </div>
            )}
          </ErrorMessage>
        </div>
        <div className="relative flex flex-col items-center gap-[13px]">
          <label
            className={`flex flex-col gap-[8px] items-center mx-auto ${
              hasPetImage ? 'pointer-events-none' : ''
            }`}
          >
            {!hasPetImage && (
              <p className="text-black text-sm font-medium font-manrope">
                Add pet's photo:
              </p>
            )}

            <div
              className={`relative w-[112px] h-[112px] bg-lightBlue bg-cover bg rounded-[20px] md:w-[182px] md:h-[182px]`}
            >
              {hasPetImage ? (
                <img
                  className="w-[100%] h-[100%] rounded-[20px] object-cover"
                  src={petImagePath}
                  alt="Pet photo"
                />
              ) : (
                <Svg
                  id="icon-add-cross"
                  className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[24px] "
                  fill="#54ADFF"
                />
              )}

              <input
                id="petImage"
                name="petImage"
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
            <label htmlFor="petImage" className="flex flex-row items-center">
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
          {errors.petImage && (
            <p className="absolute -bottom-[18px] break-keep text-red text-xs font-normal">
              {errors.petImage}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[20px] md:gap-[24px] md:min-w-[395px]">
        {category !== 'own' && (
          <label className={labelStyles}>
            <p className={inputTitleStyles}>Location</p>

            <Field
              name="location"
              type="text"
              value={location}
              placeholder="Add some location"
              className={`${inputStyles} ${
                errors.location && errors.location !== '' ? errorInputStyle : ''
              }`}
            />
            <ErrorInputMessage
              inputName="location"
              styles={errorMessageStyles}
            />
          </label>
        )}
        {category === 'sell' && (
          <label className={labelStyles}>
            <p className={inputTitleStyles}>Price</p>

            <Field
              name="price"
              type="number"
              value={price}
              placeholder="Add some price"
              className={`${inputStyles} ${
                errors.price && errors.price !== '' ? errorInputStyle : ''
              }`}
            />
            <ErrorInputMessage inputName="price" styles={errorMessageStyles} />
          </label>
        )}
        <label className={`${labelStyles} h-[100%]`}>
          <p className={inputTitleStyles}>Comments</p>

          <Field
            as="textarea"
            name="comments"
            value={comments}
            placeholder="Type about your friend"
            className={`flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[20px] resize-none ${
              errors.comments && errors.comments !== '' ? errorInputStyle : ''
            }`}
          />
          <ErrorInputMessage inputName="comments" styles={errorMessageStyles} />
        </label>
      </div>
    </div>
  );
};

export default MoreInfoForm;
