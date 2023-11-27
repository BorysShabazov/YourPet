import { useState } from 'react';
import Svg from '../Svg/Svg';

export const Pagination = ({ petsPerPage, totalPets, paginate }) => {
  const pageNumbers = [];
  const [selectedPage, setSelectedPage] = useState(1);

  for (let index = 1; index <= Math.ceil(totalPets / petsPerPage); index++) {
    pageNumbers.push(index);
  }

  const handleClick = (number, event) => {
    event.preventDefault();
    setSelectedPage(number);
    paginate(number);
  };

  return (
    <div className="w-full flex justify-center mt-5">
      <ul className="flex md:gap-3 ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="flex gap-3 justify-center items-center relative"
          >
            <a
              className={`text-sm   font-['Manrope'] tracking-wide p-4  w-8 h-8 justify-center items-center flex  rounded-[50%] ${
                selectedPage === number ? 'text-yellow font-bold' : ''
              }`}
              href="#"
              onClick={(event) => {
                handleClick(number, event);
              }}
            >
              {number}
            </a>
            {selectedPage === number && (
              <div className="absolute top-[30px] pointer-events-none">
                <Svg id={'icon-pawprint'} size={18} fill={'#ffc107'} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
