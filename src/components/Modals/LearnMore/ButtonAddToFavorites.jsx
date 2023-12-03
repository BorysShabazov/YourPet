import { useSelector } from 'react-redux';
import Svg from '../../Svg/Svg';
import { getSelectedNotice } from '../../../Redux/notices/noticesSelectors';
import { getUser } from '../../../Redux/auth/auth-selectors';

const ButtonAddToFavorites = ({ addToFavorites }) => {
  const user = useSelector(getUser);
  const pet = useSelector(getSelectedNotice);
  const isFavorite = (data) => data?.inFavorites?.includes(user?._id);

  return (
    <button
      type="button"
      onClick={addToFavorites}
      className=" md:w-32 md:h-10 smOnly:w-auto smOnly:h-10 px-5 py-2 hover:blue-gradient bg-blue rounded-3xl justify-center items-center gap-2 inline-flex text-stone-50 text-base font-bold font-['Manrope'] tracking-wide"
    >
      {isFavorite(pet) ? 'Remove' : 'Add to'}
      <span>
        {isFavorite(pet) ? (
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
