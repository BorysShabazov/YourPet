import { Link } from "react-router-dom";
import Svg from "../Svg/Svg";

export const AddPetButton = () => {
  return (
    <div
      className="w-20 h-20 md:h-10 bg-blue rounded-[40px] shadow blue-gradient fixed right-5 
    bottom-5 md:relative md:inset-0 md:mt-[40px] md:w-[129px]"
    >
      <Link className="absolute left-0 top-0 w-full h-full md:flex-row-reverse md:flex md:static md:pr-[13px] gap-[8px] items-center">
        <Svg
          id="icon-plus"
          size="24px"
          stroke="white"
          className="left-[28px] top-[20px] absolute md:static md:scale-50 "
        />
        <p
          className="text-white font-semibold text-xs absolute left-[18px] top-[48px] md:static md:text-base 
        md:tracking-wide md:font-bold md:font-['Manrope']"
        >
          Add pet
        </p>
      </Link>
    </div>
  );
};

{
  /* <div class="w-[129px] h-10 px-5 py-2 bg-blue-400 rounded-[40px] justify-center items-center gap-2 inline-flex">
  <div class="text-stone-50 text-base font-bold font-['Manrope'] tracking-wide">Add Pet</div>
  <div class="w-6 h-6 relative"></div>
</div> */
}

{
  /* <div class="w-20 h-20 bg-gradient-to-l from-blue-500 to-blue-300 rounded-full shadow"></div>

<div class="w-20 h-20 relative">
  <div class="w-20 h-20 left-0 top-0 absolute bg-blue-400 rounded-full shadow"></div>
  <div class="left-[18px] top-[48px] absolute text-white text-xs font-semibold font-['Manrope']">Add pet</div>
  <div class="w-6 h-6 left-[28px] top-[20px] absolute"></div>
</div> */
}
