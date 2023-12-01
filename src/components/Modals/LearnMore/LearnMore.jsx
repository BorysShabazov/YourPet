import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../../../Redux/auth/auth-selectors';
import Loader from '../../Loader/Loader';
import { getErrorNotice } from '../../../Redux/notices/noticesSelectors';
import {
  getIsLoadingNotice,
  getSelectedNotice,
} from '../../../Redux/notices/noticesSelectors';
import MiniLoader from '../../MiniLoader/MiniLoader';
import ContentLearnModal from './ContentLearnModal';
import { addToFavorite } from '../../../Redux/notices/noticesOperation';

const LearnMore = ({ onCloseModal, onOpenAtentionModal }) => {
  const dispatch = useDispatch();
  const isLoadingNotice = useSelector(getIsLoadingNotice);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const isError = useSelector(getErrorNotice);
  const data = useSelector(getSelectedNotice);
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
      dispatch(addToFavorite({ data, user }));
    } else {
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
            <ContentLearnModal addToFavorites={addToFavorites} data={data} />
          )}
        </>
      )}
    </>
  );
};

export default LearnMore;
