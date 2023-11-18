import searchImg from "../images/search.png";
import clear from "../images/clear.png";
import { useState } from "react";

export const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const handleClear = () => {
    setValue("");
  };

  return (
    <div>
      <label
        htmlFor="search"
        className="w-full md:w-[608px] h-11 relative inline-flex"
      >
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={value}
          onChange={handleChange}
          className="w-full md:w-[608px] h-11 bg-white rounded-[24px] md:rounded-[20px] pl-5 shadow"
        />
        <div className="right-[10px] top-[10px] absolute flex gap-2.5">
          <img src={searchImg} alt="search" className="cursor-pointer" />
          {value && <img src={clear} alt="clear" onClick={handleClear} className="cursor-pointer" />}
        </div>
      </label>
    </div>
  );
};

