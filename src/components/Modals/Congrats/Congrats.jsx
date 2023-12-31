import Svg from '../../Svg/Svg';

const Congrats = ({ onCloseModal }) => {
  return (
    <div className=" text-center my-12 w-72 md:w-[608px]">
      <h3 className=" text-neutral-900 text-2xl md:text-4xl font-medium font-['Manrope'] tracking-wide">
        Congrats!
      </h3>
      <p className=" mt-6 mb-10 md:mt-14 md:mb-16 text-neutral-900 text-base md:text-2xl  font-medium font-['Manrope'] tracking-wide">
        Youre registration is success
      </p>
      <button
        onClick={onCloseModal}
        type="button"
        className="w-60 h-10 px-7 py-2 bg-blue hover:blue-gradient rounded-3xl justify-center items-center gap-3 inline-flex  text-white text-base font-bold font-['Manrope'] tracking-wide"
      >
        Go to profile
        <span>
          <Svg
            id={'icon-pawprint'}
            size={'24px'}
            stroke={'white'}
            fill={'white'}
          />
        </span>
      </button>
    </div>
  );
};

export default Congrats;
