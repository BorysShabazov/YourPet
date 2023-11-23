const AddPetFormTitle = ({ text, step }) => {
  return (
    <div
      className={`ml-[12px] mb-[24px] text-neutral-900 text-xl font-medium font-manrope ${
        step === 3 && 'md:text-center'
      } md:text-[28px]`}
    >
      {text}
    </div>
  );
};

export default AddPetFormTitle;
