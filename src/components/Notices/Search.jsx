import { useState } from 'react';
import Svg from '../Svg/Svg';

export const Search = ({getQuery, refreshClear, className = '' }) => {
  const [value, setValue] = useState('');
  
  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const handleClear = () => {
    setValue('');
    refreshClear();
  };
  const handleSearch = () => {
    getQuery(value);
  }

  return (
    <div className={`w-full md:w-[608px] h-11 relative mx-auto ${className}`}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={value}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
        className="w-full md:w-[608px] h-11 bg-white rounded-[24px] md:rounded-[20px] pl-5 shadow"
      />
      <div className="right-[10px] top-[10px] absolute flex gap-2.5">
        <div className="cursor-pointer" onClick={handleSearch}>
          <Svg id="icon-search" size="24px" fill="#54ADFF" />
        </div>

        {value && (
          <div onClick={handleClear} className="cursor-pointer ">
            <Svg id="icon-cross" size="24px" stroke="#FFC107" />
          </div>
        )}
      </div>
    </div>
  );
};
