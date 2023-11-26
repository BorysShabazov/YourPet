import Svg from '../Svg/Svg';

const AddPetButton = () => {
  return (
    <div
      className="transition duration-200 ease-in-out hover:opacity-80 cursor-pointer flex justify-center items-center flex-col w-20 h-20  bg-gradient-to-r from-lightBlue to-blue rounded-full shadow z-10 
group hover:from-blue hover:to-lightBlue md:hover:from-blue md:hover:to-blue
md:w-[129px] md:h-10 md:px-5 md:py-2 md:from-blue md:to-blue md:rounded-[40px] md:flex-row-reverse md:gap-[6px] "
    >
      <div className="hidden md:w-6 h-6 relative md:flex items-center justify-center">
        <Svg id={'icon-plus'} size={18} stroke={'#FEF9F9'} />
      </div>
      <div className="w-6 h-6 relative items-center justify-center mb-1 md:hidden ">
        <Svg id={'icon-plus'} size={24} stroke={'#FEF9F9'} />
      </div>
      <div className="text-white text-xs font-semibold font-['Manrope'] md:text-[15px]">
        Add pet
      </div>
    </div>
  );
};

export default AddPetButton;
