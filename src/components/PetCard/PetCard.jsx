import Svg from '../Svg/Svg';
const PetCard = ({ pet }) => {
  return (
    <div className="w-72 h-[456px] mx-auto relative">
      <div className=" hover:shadow-xl w-72 h-[456px] bg-white rounded-bl-[40px] rounded-br-[40px] shadow absolute">
        <img className="w-72 h-72" src="https://marylandpet.com/wp-content/uploads/2022/05/Golden-Retriever-Puppy-288x288.jpg" alt="" />

        <div className=" flex items-center  w-[126px] h-[32px] px-[17px] py-[11px] left-0 top-[16px] absolute bg-[#CCE4FB] rounded-tr-2xl rounded-br-2xl  ">
          <p className=" flex items-center w-[92px] h-[10px]  text-neutral-900 text-sm font-medium font-['Manrope']">
            In good hands
          </p>
        </div>

        <div className="w-10 h-10 left-[236px] top-[12px] absolute group">
          <div className="w-10 h-10 left-0 top-0 absolute bg-[#CCE4FB] rounded-full " />
          <Svg
            id={'icon-heart'}
            size={24}
            className="left-[8px] fill-transparent stroke-[#54ADFF] top-[9px] absolute group-hover:fill-[#54ADFF]"
          />
        </div>
        <p className="w-[231px] text-neutral-900 text-2xl font-bold font-['Manrope'] mt-[20px] ml-[20px]">
          {/* {pet.description} */} Сute dog looking for a home


        </p>

        <button
          className="hover:bg-gradient-to-l from-[#419EF1] to-[#9BD0FF] hover:text-white hover:border-none w-[248px] h-[38px] mx-[20px] mt-[20px] rounded-[40px] border-2 border-[#54ADFF] justify-center items-center gap-2.5 inline-flex text-blue-400 font-semibold font-['Manrope'] tracking-wide group"
          type="button"
        >
          Learn more
          <Svg
            id={'icon-pawprint'}
            size={24}
            className=" fill-transparent group-hover:fill-[white]"
          />
        </button>

        <div className=" w-20 px-1 py-0.5 left-[12px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl justify-center items-center gap-[4px] inline-flex group">
          <Svg
            id={'icon-location'}
            size={24}
            className="fill-transparent stroke-[#54ADFF] "
          />
          <p className="text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide  ">
            {/* {pet.location} */} Lviv
          </p>
        </div>

        <div className=" w-20 px-1 py-0.5 left-[104px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl justify-center items-center gap-[4px] inline-flex group">
          <Svg
            id={'icon-clock'}
            size={24}
            className="fill-transparent stroke-[#54ADFF] "
          />
          <p className="text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide ">
            {/* {pet.age} */} 1 year
          </p>
        </div>

        <div className=" w-[80px] h-[28px] px-1 py-0.5 left-[196px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl flex justify-center items-center gap-[4px] group">
          <Svg
            id={'icon-female'}
            size={24}
            className="fill-transparent stroke-[#54ADFF] "
          />
          <p className="text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide ">
            {/* {pet.sex} */} female
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
