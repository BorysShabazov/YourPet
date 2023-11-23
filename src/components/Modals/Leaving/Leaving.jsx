import Svg from '../../Svg/Svg';
import { logout } from '../../../Redux/auth/auth-operations';

import { useDispatch, useSelector } from 'react-redux';

const Leaving = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    onCloseModal();
  };

  return (
    <div className="md:max-w-2xl text-center py-12 smOnly:px-3 md:px-28 rounded-3xl ">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Already leaving?
      </h3>
      <div className=" smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 } mt-12 ">
        <button
          onClick={onCloseModal}
          className="Frame36 hover:blue-gradient hover:text-white smOnly:w-64 smOnly:h-10 w-32 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope'] tracking-wide"
        >
          Cancel{' '}
        </button>
        <button
          onClick={() => handleLogout()}
          className="Frame35 smOnly:w-64 smOnly:h-10  md:ml-4 w-32 px-5 py-2 bg-blue hover:blue-gradient rounded-3xl justify-center items-center gap-2 inline-flex text-stone-50 text-base font-bold font-['Manrope'] tracking-wide"
        >
          Leave
          <span>
            <Svg
              Svg
              id={'icon-logout'}
              size={'24px'}
              stroke={'white'}
              fill={'#54ADFF'}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Leaving;

// const [isLeavingModalOpen, setLeavingModalOpen] = useState(false);

// const handleOpenLeavingModal = () => {
//     setLeavingModalOpen(true);

//   };
//   const handleCloseLeavingModal = () => {
//     setLeavingModalOpen(false);
//   };

{
  /* <BasicModal
isOpen={isLeavingModalOpen}
        onCloseModal={handleCloseLeavingModal}>
      <Leaving onCloseModal={handleCloseLeavingModal}/>
     </BasicModal>
     */
}
