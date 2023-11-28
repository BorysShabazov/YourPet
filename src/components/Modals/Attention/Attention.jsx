import { Link } from 'react-router-dom';
import Svg from '../../Svg/Svg';
const AttentionModal = ({ onCloseModal }) => {
  return (
    <div className="flex justify-center items-center flex-col w-72 md:w-[608px]">
      <h3 className="Attention mt-12 text-center text-neutral-900 text-2xl md:text-4xl font-medium fon">
        Attention
      </h3>
      <p className=" mt-5 mb-10 text-center text-neutral-900 text-sm font-medium font-['Manrope'] leading-none md:leading-6 tracking-wide">
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className="flex gap-2.5 md:gap-5 smOnly:flex-col mb-12">
        <Link to="/login">
          <button
            onClick={onCloseModal}
            type="button"
            className="  smOnly:w-60 smOnly:h-10 smOnly:px-16 smOnly:py-2 md:w-36 md:h-9 md:py-2 md:px-5 bg-yellow hover:orange-gradient rounded-3xl border-2 border-yellow justify-center items-center gap-2 inline-flex text-white text-base font-bold font-['Manrope'] tracking-wide"
          >
            Log IN
            <span className=" rotate-[25deg] w-6 h-6 ">
              <Svg
                id={'icon-pawprint'}
                size={'24px'}
                stroke={'white'}
                fill={'white'}
              />
            </span>
          </button>
        </Link>
        <Link to="/register">
          <button
            onClick={onCloseModal}
            type="button"
            className="  smOnly:w-60 smOnly:h-10 smOnly:px-16 smOnly:py-2 md:w-36 md:h-9 md:py-2 md:px-5 justify-center items-center hover:orange-gradient text-yellow hover:text-white flex border-2 border-yellow rounded-3xl"
          >
            Registration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AttentionModal;

// const [isAttentionModalOpen, setAttentionModalOpen] = useState(false);

// const handleOpenAttentionModal = () => {
//     setAttentionModalOpen(true);
//   };
//   const handleCloseAttentionModal = () => {
//     setAttentionModalOpen(false);
//   };
// const handleAddToFavorites = () => {
//     if (Якщо не авторизований користувач) {
//       handleOpenAttentionModal();
//     } else {
// Функція або логіка, що додає до обраного.
//     }
//   };

// <BasicModal
// isOpen={isAttentionModalOpen}
//         onCloseModal={handleCloseAttentionModal}>
//        <AttentionModal  onCloseModal={handleCloseAttentionModal} />
//       </BasicModal>
