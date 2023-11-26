const titles = {
  own: 'Add pet',
  sell: 'Add pet for sell',
  lost: 'Add lost pet',
  found: 'Add found pet',
};

const AddPetFormTitle = ({ category, step }) => {
  return (
    <div
      className={`ml-[12px] mb-[24px] text-neutral-900 text-xl font-medium font-manrope ${
        step === 3 && 'md:text-center'
      } md:text-[28px]`}
    >
      {titles[category] || titles.own}
    </div>
  );
};

export default AddPetFormTitle;
