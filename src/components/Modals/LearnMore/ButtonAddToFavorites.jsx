import Svg from '../../Svg/Svg';

const ButtonAddToFavorites = ({ isAddToFavorite, addToFavorites }) => {
  return (
    <button
      type="button"
      onClick={addToFavorites}
      className=" md:w-32 md:h-10 smOnly:w-64 smOnly:h-10 px-5 py-2 bg-blue hover:blue-gradientrounded-3xl justify-center items-center gap-2 inline-flex text-stone-50 text-base font-bold font-['Manrope'] tracking-wide"
    >
      {isAddToFavorite ? 'Remove' : 'Add to'}
      <span>
        {isAddToFavorite ? (
          <Svg
            id={'icon-heart'}
            size={'24px'}
            stroke={'white'}
            fill={'#54ADFF'}
          />
        ) : (
          <Svg
            id={'icon-heart'}
            size={'24px'}
            stroke={'#54ADFF'}
            fill={'white'}
          />
        )}
      </span>
    </button>
  );
};
export default ButtonAddToFavorites;

{
  /* <button
          type="button" onClick={addToFavorites}
          className=" md:w-32 md:h-10 smOnly:w-64 smOnly:h-10 px-5 py-2 bg-blue hover:bg-gradient-to-l from-blue to-lightBlue rounded-3xl justify-center items-center gap-2 inline-flex text-stone-50 text-base font-bold font-['Manrope'] tracking-wide">
          Add to{isLoading ?
                      (<ColorRing visible={true} height="18" width="18" />)
                   : (<span>{isAddToFavorite ? <Svg id={'icon-heart'} size={'24px'} stroke={'white'} fill={'#54ADFF'}/>
          : <Svg id={'icon-heart'} size={'24px'} stroke={'#54ADFF'} fill={'white'}/>
          }</span>)}
        </button> */
}
