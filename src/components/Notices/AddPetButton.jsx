import { Link } from "react-router-dom";
import Svg from "../Svg/Svg";

export const AddPetButton = () => {
  return (
    <div className="w-20 h-20 bg-blue relative rounded-full shadow blue-gradient">
      <Link className="absolute left-0 top-0 w-full h-full">
          <Svg id="icon-plus" size="24px" stroke="white" className="left-[28px] top-[20px] absolute"/>
          <p className="text-white font-semibold text-xs absolute left-[18px] top-[48px]">
            Add pet
          </p>
      </Link>
    </div>
  );
};

{
  /* <div class="w-20 h-20 bg-gradient-to-l from-blue-500 to-blue-300 rounded-full shadow"></div>

<div class="w-20 h-20 relative">
  <div class="w-20 h-20 left-0 top-0 absolute bg-blue-400 rounded-full shadow"></div>
  <div class="left-[18px] top-[48px] absolute text-white text-xs font-semibold font-['Manrope']">Add pet</div>
  <div class="w-6 h-6 left-[28px] top-[20px] absolute"></div>
</div> */
}
