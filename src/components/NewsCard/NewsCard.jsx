import { Link } from "react-router-dom/dist";
import news from "../../images/news1.png";

const NewsCard = () => {
  return (
    <div className=" w-[280px]  mx-auto md:mx-0 md:w-[336px]  xl:w-[395px]">
      <div className="w-full h-2 blue-gradient-full rounded-[40px]"></div>
      <div className="mx-auto mt-[12px] flex flex-col gap-[16px] bg-white rounded-[20px]">
        <img
          src={news}
          alt="newImage"
          className="w-full  bg-black bg-opacity-20 rounded-[20px] h-[252px] "
        />
        <div className="px-[16px] pb-[16px] md:px-[12px] md:pb-[12px] flex flex-col gap-[16px]">
          <h2 className="text-2xl font-bold font-manrope ">Happy new about pet</h2>
          <p className="text-base font-normal font-manrope">
            In January, I fell in love with someone. It was the last thing I’d
            expect and caught me completely off guard.He has sandy blond hair
            with flecks of gray and gorgeous, sad eyes. He loves to go on walks
                      and cuddle. His name is Herbie. 
                      
          </p>

          <div className="flex justify-between mt-[24px] md:mt-[40px]">
            <p className=" text-grey text-base font-normal font-manrope">Date</p>
            <Link className="text-blue text-base font-medium font-manrope hover:text-black">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
