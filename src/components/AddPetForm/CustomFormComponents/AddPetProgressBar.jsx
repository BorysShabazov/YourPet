import { useContext } from 'react';
import { AddPetFormContext } from '../AddPetForm';

const progressBarStyles =
  'flex flex-col justify-center text-[10px] font-medium font-manrope md:text-base  md:leading-relaxed';
const defaultBarTitleStyles = 'text-grey mb-[12px]';
const activeBarTitleStyles = 'text-blue mb-[12px]';
const doneBarTitleStyles = 'text-green mb-[12px]';
const barLineStyles = 'w-[80px] h-[8px] rounded-lg md:w-[120px]';
const defaultBarLineStyles = `${barLineStyles} bg-lightBlue`;
const activeBarLineStyles = 'w-[80px] h-[8px] bg-blue rounded-lg md:w-[120px]';
const doneBarLineStyles = 'w-[80px] h-[8px] bg-green rounded-lg md:w-[120px]';

const AddPetProgressBar = () => {
  const { step } = useContext(AddPetFormContext);

  return (
    <div className="w-[100%] flex flex-row justify-center mb-[16px] gap-[12px] md:gap-[16px] md:mb-[24px]">
      {/* step 1 */}
      <div className={`${progressBarStyles}`}>
        <p
          className={`
          ${step === 1 ? activeBarTitleStyles : doneBarTitleStyles}`}
        >
          Choose option
        </p>
        <div
          className={`${step === 1 ? activeBarLineStyles : doneBarLineStyles}`}
        />
      </div>

      {/* step 2 */}
      <div className={`${progressBarStyles}`}>
        <p
          className={`
          ${step === 1 ? defaultBarTitleStyles : ''} 
          ${step === 2 ? activeBarTitleStyles : ''} 
          ${step === 3 ? doneBarTitleStyles : ''}`}
        >
          Personal details
        </p>
        <div
          className={`
          ${step === 1 ? defaultBarLineStyles : ''} 
          ${step === 2 ? activeBarLineStyles : ''} 
          ${step === 3 ? doneBarLineStyles : ''}`}
        />
      </div>

      {/* step 3 */}
      <div className={`${progressBarStyles}`}>
        <p
          className={`${
            step === 3 ? activeBarTitleStyles : defaultBarTitleStyles
          }`}
        >
          More info
        </p>
        <div
          className={`${
            step === 3 ? activeBarLineStyles : defaultBarLineStyles
          }`}
        />
      </div>
    </div>
  );
};

export default AddPetProgressBar;
