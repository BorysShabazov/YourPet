import { useContext } from 'react';
import { AddPetFormContext } from './AddPetForm';

const progressBarStyles =
  'flex flex-col justify-center text-[10px] font-medium font-manrope md:text-base  md:leading-relaxed';
const defaultBarTitleStyles = 'text-grey mb-[12px]';
const activeBarTitleStyles = 'text-blue mb-[12px]';
const doneBarTitleStyles = 'text-green mb-[12px]';
const defaultBarLineStyles =
  'w-[80px] h-[8px] bg-lightBlue rounded-lg md:w-[120px]';
const activeBarLineStyles = 'w-[80px] h-[8px] bg-blue rounded-lg md:w-[120px]';
const doneBarLineStyles = 'w-[80px] h-[8px] bg-green rounded-lg md:w-[120px]';

const AddPetProgressBar = () => {
  const { step } = useContext(AddPetFormContext);

  const chooseTitleStyle = (stepCount) => {
    if (stepCount === 1) {
      return;
    }
  };
  return (
    <div className="w-[100%] flex flex-row justify-center mb-[16px] gap-[12px] md:gap-[16px] md:mb-[24px]">
      <div className={`${progressBarStyles}`}>
        <p
          className={`${activeBarTitleStyles} ${
            step >= 2 ? doneBarTitleStyles : ''
          }`}
        >
          Choose option
        </p>
        <div
          className={`${activeBarLineStyles} ${
            step >= 2 ? doneBarLineStyles : ''
          }`}
        />
      </div>
      <div className={`${progressBarStyles}`}>
        <p
          className={`${
            step === 2 ? activeBarTitleStyles : defaultBarTitleStyles
          } ${step === 3 ? doneBarTitleStyles : ''}`}
        >
          Personal details
        </p>
        <div
          className={`${defaultBarLineStyles} ${
            step === 2 ? activeBarLineStyles : ''
          } ${step === 3 ? doneBarLineStyles : ''}`}
        />
      </div>
      <div className={`${progressBarStyles}`}>
        <p
          className={`${defaultBarTitleStyles} ${
            step === 3 ? activeBarTitleStyles : ''
          }`}
        >
          More info
        </p>
        <div
          className={`${defaultBarLineStyles} ${
            step === 3 ? activeBarLineStyles : ''
          }`}
        />
      </div>
    </div>
  );
};

export default AddPetProgressBar;
