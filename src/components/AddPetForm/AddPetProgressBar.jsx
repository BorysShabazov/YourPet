const AddPetProgressBar = () => {
  return (
    <div className="w-[100%] flex flex-row gap-[12px] mb-[16px]">
      <div className="firstStep flex flex-col justify-center">
        <p className="mb-[12px] text-grey text-[10px] font-medium font-manrope">
          Choose option
        </p>
        <div className="w-20 h-2 bg-lightBlue rounded-lg" />
      </div>
      <div className="secondStep flex flex-col justify-center">
        <p className="mb-[12px] text-grey text-[10px] font-medium font-manrope">
          Personal details
        </p>
        <div className="w-20 h-2 bg-lightBlue rounded-lg" />
      </div>
      <div className="lastStep flex flex-col justify-center">
        <p className="mb-[12px] text-grey text-[10px] font-medium font-manrope">
          More info
        </p>
        <div className="w-20 h-2 bg-lightBlue rounded-lg" />
      </div>
    </div>
  );
};

export default AddPetProgressBar;
