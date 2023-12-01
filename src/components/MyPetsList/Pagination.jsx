import { useState } from 'react';
import Svg from '../Svg/Svg';

export const Pagination = ({
  petsPerPage,
  maxPages,
  currentPage,
  paginate,
}) => {
  let pageNumbers = [];
  // const maxPages = Math.ceil(totalPets / petsPerPage)

  const [selectedPage, setSelectedPage] = useState(currentPage);

  for (let index = 1; index <= maxPages; index++) {
    pageNumbers.push(index);
  }

  const pageSeparation = () => {
    let firstPages, lastPages, middlePages;

    if (selectedPage === 1) {
      firstPages = pageNumbers.slice(0, 2);
      middlePages = pageNumbers.slice(selectedPage + 1, selectedPage + 1);
      lastPages = [pageNumbers[maxPages - 1]];
    } else if (selectedPage === maxPages) {
      firstPages = [pageNumbers[0]];
      middlePages = pageNumbers.slice(selectedPage, selectedPage - 3);
      lastPages = pageNumbers.slice(-2);
    } else {
      firstPages = [pageNumbers[0]];
      middlePages = pageNumbers.slice(selectedPage - 2, selectedPage + 1);
      lastPages = [pageNumbers[maxPages - 1]];
    }

    let result;

    if (selectedPage === 1) {
      result = [...firstPages, ...middlePages, '...', ...lastPages];
    } else if (selectedPage !== 1 && selectedPage !== maxPages) {
      if (selectedPage <= 4) {
        result = [...firstPages, ...middlePages, '...', ...lastPages];
      } else if (selectedPage >= maxPages - 3) {
        result = [...firstPages, '...', ...middlePages, ...lastPages];
      } else {
        result = [...firstPages, '...', ...middlePages, '…', ...lastPages];
      }
    } else if (selectedPage === maxPages) {
      result = [...firstPages, '...', ...middlePages, ...lastPages];
    }

    result = result.filter(
      (value, index, self) => self.indexOf(value) === index,
    );

    return result;
  };

  const cutNumbers = pageSeparation();

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
    if (nextPage <= maxPages) {
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
            <Svg
              id={'icon-arrow-left'}
              size={14}
              stroke={selectedPage === 1 ? 'gray' : '#54adff'}
            />
          </a>
        </li>
        {pageNumbers.length < 5
          ? pageNumbers.map((number) => (
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
            ))
          : cutNumbers.map((number) => {
              if (number === '...' || number === '…') {
                return (
                  <li key={number} className="w-[35px] h-[35px] relative">
                    <div
                      href="#"
                      className={`flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]" ${
                        selectedPage === number ? 'bg-[#54adff] text-white' : ''
                      }`}
                    >
                      {number}
                    </div>
                  </li>
                );
              }
              return (
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
              );
            })}
        <li className="w-[35px] h-[35px] relative">
          <a
            href="#"
            className=" flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]"
            onClick={(event) => handleNextClick(event)}
          >
            <div className="rotate-180">
              <Svg
                id={'icon-arrow-left'}
                size={14}
                stroke={selectedPage === maxPages ? 'gray' : '#54adff'}
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};
