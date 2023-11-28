import { Link } from "react-router-dom/dist";
import { format } from "date-fns";
import { useState } from "react";

const CuttedText = ({text, length}) => {
  const [isHover, setIsHover] = useState(false);
  
  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false);

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >

      {text.length > length ? (<span style={{cursor:'zoom-in'}}>
        {!isHover ? text.slice(0, length) + '...' : text}  
      </span>):(text)
        }
    </span>
  )

}

const NewsCard = ({ date, imgUrl, text, title, url }) => {
  return (
    <div className="   mx-auto md:mx-0 md:w-[336px]  xl:w-[395px]">
      <div className="w-full h-2 blue-gradient-full rounded-[40px]"></div>
      <div className="mx-auto mt-[12px] flex flex-col justify-between bg-white rounded-[20px] md:h-[556px] p-[16px] md:p-[12px]">
        <div className=" flex flex-col gap-[16px]">
          <div className="mx-[-16px] mt-[-16px] md:mx-[-12px] md:mt-[-12px]">
             <img 
          src={imgUrl}
          alt="newImage"
          className="w-full  bg-black bg-opacity-20 rounded-[20px] h-[252px] "
        />
          </div>
         <h2 className="text-2xl font-bold font-manrope "><CuttedText text={ title} length="40"/></h2>
          <p className="text-base font-normal font-manrope"><CuttedText text={ text} length="200" /></p>
        </div>
        <div className="flex justify-between mt-[24px] md:mt-[40px]">
          <p className=" text-grey text-base font-normal font-manrope">
            {format(Date.parse(date), "dd/MM/yyyy")}
          </p>
          <Link
            target="_blank"
            to={url}
            className="text-blue text-base font-medium font-manrope hover:text-black"
          >
            Read more
          </Link>
        </div>
      </div>
      </div>
    
  );
};

export default NewsCard;
