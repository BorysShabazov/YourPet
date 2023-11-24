import { useState } from 'react';
import Svg from '../Svg/Svg';
import { useDispatch, useSelector } from 'react-redux';
import { getNotices } from '../../Redux/notices/noticesSelectors';
import { useParams } from 'react-router-dom';

export const Search = ({ className = '' }) => {
  const [value, setValue] = useState('');
  const notices = useSelector(getNotices);
  const { categoryName } = useParams();
  const dispatch=useDispatch()


  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const handleClear = () => {
    setValue('');
  };
  const handleSearch = () => {
    
  }

  return (
    <div className={`w-full md:w-[608px] h-11 relative mx-auto ${className}`}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={value}
        onChange={handleChange}
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
