import { useState } from 'react';
import Svg from '../Svg/Svg';

export const Pagination = ({ petsPerPage, totalPets, currentPage, paginate }) => {
  const pageNumbers = [];
  const [selectedPage, setSelectedPage] = useState(currentPage || 1);

  for (let index = 1; index <= Math.ceil(totalPets / petsPerPage); index++) {
    pageNumbers.push(index);
  }



  const handleClick = (number, event) => {
    event.preventDefault();
    setSelectedPage(number);
    paginate(number);
  };

  const handlePrevClick = (event) => {
    event.preventDefault();
    const prevPage = selectedPage - 1;
    if (prevPage >= 1) {
      setSelectedPage(prevPage);
      paginate(prevPage);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    const nextPage = selectedPage + 1;
    if (nextPage <= Math.ceil(totalPets / petsPerPage)) {
      setSelectedPage(nextPage);
      paginate(nextPage);
    }
  };

  return (
    <div className="w-full flex justify-center mt-5">
      <ul className="flex gap-3 ">
        <li className="w-[35px] h-[35px] relative">
          <a
            href="#"
            className="flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]"
            onClick={(event) => handlePrevClick(event)}
          >
                        <Svg id={'icon-arrow-left'} size={14} stroke={selectedPage === 1 ? 'gray' : '#54adff'}/>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="w-[35px] h-[35px] relative">
            <a
              href="#"
              className={`flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]" ${
                selectedPage === number ? 'bg-[#54adff] text-white' : ''
              }`}
              onClick={(event) => handleClick(number, event)}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="w-[35px] h-[35px] relative">
          <a
            href="#"
            className=" flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]"
            onClick={(event) => handleNextClick(event)}
          >
         <div className="rotate-180">
         <Svg id={'icon-arrow-left'} size={14} stroke={selectedPage === Math.ceil(totalPets / petsPerPage) ? 'gray' : '#54adff'}/>
         </div>

          </a>
        </li>
      </ul>
    </div>
  );
};
