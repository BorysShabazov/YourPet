const progressBarStyles = 'flex flex-col justify-center';
const defaultBarTitleStyles =
  'mb-[12px] text-grey text-[10px] font-medium font-manrope md:text-base  md:leading-relaxed';
const defaultBarLineStyles =
  'w-[80px] h-[8px] bg-lightBlue rounded-lg md:w-[120px]';

const AddPetProgressBar = () => {
  return (
    <div className="w-[100%] flex flex-row justify-center mb-[16px] gap-[12px] md:gap-[16px] md:mb-[24px]">
      <div className={`firstStep ${progressBarStyles}`}>
        <p className={defaultBarTitleStyles}>Choose option</p>
        <div className={`${defaultBarLineStyles}`} />
      </div>
      <div className={`secondStep ${progressBarStyles}`}>
        <p className={defaultBarTitleStyles}>Personal details</p>
        <div className={`${defaultBarLineStyles}`} />
      </div>
      <div className={`lastStep ${progressBarStyles}`}>
        <p className={defaultBarTitleStyles}>More info</p>
        <div className={`${defaultBarLineStyles}`} />
      </div>
    </div>
  );
};

export default AddPetProgressBar;
