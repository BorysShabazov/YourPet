const defaultContainerStyles = 'flex flex-col';

const chooseOptionContainerStyles = `${defaultContainerStyles} relative mb-[45px] gap-[12px] md:mb-[87px]`;
const personalDetailsContainerStyles = `${defaultContainerStyles} mb-[24px] gap-[20px] md:gap-[24px] md:mb-[40px]`;
const moreInfoContainerStyles = `${defaultContainerStyles} mb-[24px] gap-[20px] md:flex-row md:mx-[40px] md:gap-[45px] xl:gap-[80px]`;

export const FormSectionContainer = ({ sectionName, children }) => {
  const chooseStyle = (sectionName) => {
    if (sectionName === 'chooseOption') return chooseOptionContainerStyles;
    if (sectionName === 'personalDetails')
      return personalDetailsContainerStyles;
    if (sectionName === 'moreInfo') return moreInfoContainerStyles;
  };

  return <div className={chooseStyle(sectionName)}>{children}</div>;
};
