import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../Redux/auth/auth-selectors';
import Loader from '../../Loader/Loader';
import { getErrorNotice } from '../../../Redux/notices/noticesSelectors';
import {
  getIsLoadingNotice,
  getSelectedNotice,
} from '../../../Redux/notices/noticesSelectors';
import MiniLoader from '../../MiniLoader/MiniLoader';
import ContentLearnModal from './ContentLearnModal';

const LearnMore = ({ onCloseModal, onOpenAtentionModal }) => {
  const isLoadingNotice = useSelector(getIsLoadingNotice);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isError = useSelector(getErrorNotice);
  const data = useSelector(getSelectedNotice);
  const [isAddToFavorite, setAddToFavorite] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const addToFavorites = () => {
    if (isLoggedIn) {
      if (isAddToFavorite) {
        // Функція для видалення з улюблені

        setAddToFavorite(false);
        console.log('Видалення з улюблених');
        return;
      }
      // Функція для додавання в улюблені
      setAddToFavorite(true);
      console.log('Додавання в улюблені');
    } else {
      // Відкриття модалки Atention для входу або реєстрації
      console.log('Відкриття модалки Attention');
      onCloseModal();
      onOpenAtentionModal();
    }
  };

  return (
    <>
      {isError ? (
        <div className="flex flex-col justify-center items-center smOnly:w-[280px] smOnly:h-[821px] md:w-[633px] md:h-[495px]">
          <img src="/src/images/catError.png" alt="error" />
          <p className="text-rose-600 text-lg font-bold font-['Manrope']">
            Sorry, something went wrong !
          </p>
          <button
            onClick={() => window.location.reload()}
            className=" md:w-58  md:h-10 smOnly:w-auto smOnly:h-10 md:mt-4 smOnly:mt-5 px-5 py-2 bg-blue hover:blue-gradient text-white rounded-3xl text-base font-bold font-['Manrope']"
            type="button"
          >
            Reload page
          </button>
        </div>
      ) : (
        <>
          {isLoadingNotice ? (
            <div className="smOnly:w-[280px] smOnly:h-[821px] md:w-[633px] md:h-[495px] flex justify-center items-center">
              {windowSize.width <= 767.98 ? <MiniLoader /> : <Loader />}
            </div>
          ) : (
            <ContentLearnModal
              addToFavorites={addToFavorites}
              isAddToFavorite={isAddToFavorite}
              data={data}
            />
          )}
        </>
      )}
    </>
  );
};

export default LearnMore;
