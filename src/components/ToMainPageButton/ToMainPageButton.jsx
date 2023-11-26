import React from 'react';
import { useNavigate } from 'react-router-dom';
import Svg from '../Svg/Svg';

const ToMainPageButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer mx-auto w-[248px] mt-[44px] flex justify-center items-center h-10 px-7 py-2  bg-gradient-to-r from-blue to-blue  rounded-[40px] gap-3 shadow z-10 flex-row-reverse  md:px-5 md:py-2 md:gap-[6px] xl:mt-[40px] xl:center hover:blue-gradient focus:blue-gradient"
      onClick={() => navigate('/')}
    >
      <div className="w-6 h-[21px] md:h-6 justify-center items-center inline-flex">
        <Svg
          id={'icon-pawprint'}
          size={24}
          stroke={'#FEF9F9'}
          fill={'#FEF9F9'}
        />
      </div>
      <div className="text-stone-50 text-base font-bold font-['Manrope'] tracking-wide xl:text-base xl:font-bold xl:tracking-wide">
        To main page
      </div>
    </div>
  );
};

export default ToMainPageButton;
