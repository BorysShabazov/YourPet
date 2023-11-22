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
