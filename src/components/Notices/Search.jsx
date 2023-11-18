import { useState } from "react";
import Svg from "../Svg/Svg";

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
          <div className="cursor-pointer"><Svg id="icon-search" size="24px"  /></div>
          
          {value &&
            <div onClick={handleClear} className="cursor-pointer ">
              <Svg id="icon-clear" size="24px" />
            </div>}
            
        </div>
      </label>
    </div>
  );
};

