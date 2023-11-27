import { useState } from 'react';
import Svg from '../../Svg/Svg';
import { ErrorMessage, Field } from 'formik';
import { ErrorInputMessage } from '../CustomFormComponents/ErrorInputMessage';
import { RadioButton } from '../CustomFormComponents/RadioButton';
import { AddPetImageInput } from '../CustomFormComponents/AddPetImageInput';
import { CustomInput } from '../CustomFormComponents/CustomInput';
import { FormSectionContainer } from '../CustomFormComponents/FormSectionContainer';

const baseButtonStyles =
  'flex flex-row align-center px-[16px] py-[8px] w-[105px] rounded-[40px] justify-center items-center w-fit  text-sm text-base font-normal font-manrope tracking-wide leading-normal cursor-pointer';
const regularButtonStyles = `${baseButtonStyles} text-grey`;
const hoveredButtonStyles = `${baseButtonStyles} bg-blue text-background`;
const inputTitleStyles = 'mb-[4px]';
const labelStyles =
  'relative flex flex-col text-black text-sm font-medium font-manrope md:text-xl md:leading-relaxed';
const errorInputStyle = 'border-red';
const errorMessageStyles =
  'absolute -bottom-[18px] ml-4 text-red text-xs font-normal';
const sexSvgStyle = 'flex items-center w-fit';

const MoreInfoSection = ({
  errors,
  category,
  sex,
  price,
  location,
  petImage,
  setPhoto,
  comments,
}) => {
  const chooseButtonColor = (inputValue) => {
    if (sex === '' && inputValue === 'female') return '#F43F5E';
    if (sex === '' && inputValue === 'male') return '#54ADFF';

    return sex === inputValue ? '#FFF' : '#888888';
  };

  return (
    <FormSectionContainer sectionName="moreInfo">
      <div>
        <div className="relative flex flex-col gap-[16px] mb-[16px]">
          <p className={`${labelStyles} -mb-[8px] items-center`}>The sex</p>
          <div className="flex flex-row mx-auto gap-[16px]">
            <RadioButton
              category={sex}
              name="sex"
              value="female"
              style={
                sex === 'female' ? hoveredButtonStyles : regularButtonStyles
              }
            >
              <Svg
                id="icon-female"
                className={sexSvgStyle}
                fill="transparent"
                stroke={chooseButtonColor('female')}
              />
              Female
            </RadioButton>
            <RadioButton
              category={sex}
              name="sex"
              value="male"
              style={`${baseButtonStyles} ${
                sex === 'male' ? hoveredButtonStyles : regularButtonStyles
              }`}
            >
              <Svg
                id="icon-male"
                className={sexSvgStyle}
                fill="transparent"
                stroke={chooseButtonColor('male')}
              />
              Male
            </RadioButton>
          </div>
          <ErrorInputMessage
            inputName={'sex'}
            containerStyles="absolute bottom-[5px] flex justify-center w-[100%] text-red text-xs font-normal"
          />
        </div>
        <AddPetImageInput
          petImage={petImage}
          setPhoto={setPhoto}
          imageError={errors.petImage}
        />
      </div>
      <div className="flex flex-col gap-[20px] md:gap-[24px] md:min-w-[395px]">
        {category !== 'own' && (
          <CustomInput
            name="location"
            value={location}
            error={errors.location}
            placeholder="Add some location"
          >
            Location
          </CustomInput>
        )}
        {category === 'sell' && (
          <CustomInput
            name="price"
            type="number"
            value={price}
            error={errors.price}
            placeholder="Add some price"
          >
            Price
          </CustomInput>
        )}
        <label className={`${labelStyles} h-[100%]`}>
          <p className={inputTitleStyles}>Comments</p>

          <Field
            as="textarea"
            name="comments"
            value={comments}
            placeholder="Type about your friend"
            className={`flex w-[100%] h-[100%] px-[16px] py-[8px] border border-blue rounded-[20px] resize-none ${
              errors.comments ? errorInputStyle : ''
            }`}
          />
          <ErrorInputMessage inputName="comments" styles={errorMessageStyles} />
        </label>
      </div>
    </FormSectionContainer>
  );
};

export default MoreInfoSection;
