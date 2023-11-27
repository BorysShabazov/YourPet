import ButtonAddToFavorites from './ButtonAddToFavorites';
import ButtonContact from './ButtonContact';
import ListOfNotice from './ListInfoOfNotice';

const ContentLearnModal = ({ data, isAddToFavorite, addToFavorites }) => {
  return (
    <div className=" smOnly:max-w-[280px] md:w-[633px]">
      <div className="md:flex ">
        <div className="flex relative justify-center items-center smOnly:mt-8">
          <img
            src="/src/images/Rectangle24.png"
            alt="dog"
            className="Rectangle303 smOnly:w-auto smOnly:h-[286px] md:w-[262px] md:h-[325px] rounded-bl-[40px] rounded-br-[40px]"
          />
          <p className=" InGoodHands py-2 px-3 rounded-e-2xl bg-lightBlue text-neutral-900 text-sm font-medium font-['Manrope'] top-4 smOnly: left-[1px] md:left-0 absolute">
            {data.group}
          </p>
        </div>
        <div className="md:ml-6">
          <h2 className=" text-black text-2xl smOnly:mt-3 sm: w-52 font-bold font-['Manrope']">
            {data.title}
          </h2>
          <ListOfNotice data={data} />
        </div>
      </div>
      <p className=" mt-3 text-black smOnly:text-sm md:text-base  font-semibold font-['Manrope'] tracking-wide">
        Comments:{' '}
        <span className="text-black smOnly:text-sm md:text-base  font-medium font-['Manrope'] tracking-wide">
          {data.comments}
        </span>
      </p>
      <div className="button-container flex gap-2 md:gap-4 smOnly:mt-3 md:mt-16 smOnly:flex-col md:justify-end">
        <ButtonAddToFavorites
          isAddToFavorite={isAddToFavorite}
          addToFavorites={addToFavorites}
        />
        <ButtonContact data={data} />
      </div>
    </div>
  );
};

export default ContentLearnModal;
