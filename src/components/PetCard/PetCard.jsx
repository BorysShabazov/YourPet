import { useDispatch, useSelector } from 'react-redux';
import { getNoticeById } from '../../Redux/notices/noticesOperation';
import Svg from '../Svg/Svg';
import { useState } from 'react';
import LearnMore from '../Modals/LearnMore/LearnMore';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import AttentionModal from '../Modals/Attention/Attention';
import { getIsLoggedIn } from '../../Redux/auth/auth-selectors';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';

const PetCard = ({ pet }) => {
  const isFemale = pet.sex === 'female'
const newWord = (word, qty) => {
  if (word && word.length && qty) {
    if (word.length > qty) {
      return word.slice(0, qty) + "...";
    } else {
      return word;
    }
  } else {
    return word || "";
  }
};
let shortedWrod = newWord(pet.location, 4);
  const birthDate = new Date(pet.birthDate);
  const currentYear = new Date().getFullYear();
  const age = Math.ceil((currentYear - birthDate.getFullYear()));

  const dispatch = useDispatch();
  const [isLearnMoreModalOpen, setLearnMoreModalOpen] = useState(false);
  const [isAttentionModalOpen, setAttentionModalOpen] = useState(false);

  const handleOpenAttentionModal = () => {
    setAttentionModalOpen(true);
  };

  const handleCloseAttentionModal = () => {
    setAttentionModalOpen(false);
  };

  const handleOpenLearnMoreModal = (_id) => {
    setLearnMoreModalOpen(true);
    dispatch(getNoticeById(_id));
  };

  const handleCloseLearnMoreModal = () => {
    setLearnMoreModalOpen(false);
  };

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const handleOpenDeleteModal = (id) => {
    setDeleteModalOpen(true);
    setId(id);
  };
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setId(null);
  };
  

  return (
    <>
      <div className=" w-[288px] h-[456px]  pb-[24px]  mdOnly:w-[336px] smOnly:w-[280px] relative hover:shadow-xl  bg-white rounded-bl-[40px] rounded-br-[40px] shadow-default hover:shadow-focus">
        <img className="h-[288px] w-[100%]" src={pet.imageURL} alt={pet.type} />

        <div className=" flex   w-[126px] h-[32px] px-[17px] py-[11px] left-0 top-[16px] absolute bg-[#CCE4FB] rounded-tr-2xl rounded-br-2xl  ">
          <p className=" flex items-center justify-center  w-[92px] h-[10px]  text-neutral-900 text-sm font-medium font-['Manrope']">
            {pet.category}
          </p>
        </div>

        <div className="w-10 h-10 right-[12px] top-[12px] bg-[#CCE4FB] rounded-full absolute group">
          <Svg
            id={'icon-heart'}
            size={24}
            className="left-[8px] fill-transparent stroke-[#54ADFF] top-[9px] absolute group-hover:fill-[#54ADFF]"
          />
        </div>

        <div
          className="w-10 h-10 right-[12px] top-[68px] absolute group bg-[#CCE4FB] rounded-full "
          onClick={() => handleOpenDeleteModal(id)}
        >
          <Svg
            id={'icon-trash'}
            size={24}
            className=" left-[8px] fill-transparent stroke-[#54ADFF] top-[9px] absolute group-hover:fill-[#54ADFF] "
          />
        </div>
        <p className="w-[231px] h-[66px] text-neutral-900 text-2xl font-bold font-['Manrope'] mt-[20px] ml-[20px]">
          {pet.title}
        </p>

        <button
          onClick={() => handleOpenLearnMoreModal(pet._id)}
          className="hover:bg-gradient-to-l from-[#419EF1] to-[#9BD0FF] hover:text-white hover:border-none w-[248px] h-[38px] mx-[20px] mt-[20px] smOnly:mx-[16px] mdOnly:mx-[44px] mdOnly:h-[40px] rounded-[40px] border-2 border-[#54ADFF]  text-[#54ADFF] items-center pl-[78px]   flex font-['Manrope'] tracking-wide group"
          type="button"
        >
          <p className="transition-transform transform group-hover:-translate-x-[12px] flex ">
            Learn more
          </p>
          <Svg
            id={'icon-pawprint'}
            size={24}
            className=" fill-transparent group-hover:fill-[white]"
          />
        </button>

        <div className=" w-20 px-1 py-0.5 left-[12px] smOnly:left-[8px] mdOnly:left-[24px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl justify-center items-center gap-[4px] inline-flex group">
          <Svg
            id={'icon-location'}
            size={24}
            className="fill-transparent stroke-[#54ADFF] "
          />
          <p className="text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide  ">
            {shortedWrod}
          </p>
        </div>

        <div className=" w-20 px-1 py-0.5 left-[104px] smOnly:left-[100px] mdOnly:left-[128px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl justify-center items-center gap-[4px] inline-flex group">
          <Svg
            id={'icon-clock'}
            size={24}
            className="fill-transparent stroke-[#54ADFF] "
          />
          <p className="text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide ">
          {age} {age === 1 ? 'year' : 'years'}
          </p>
        </div>

        <div className=" w-[80px] h-[28px] px-1 py-0.5 left-[196px] smOnly:left-[192px] mdOnly:left-[232px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl flex items-center gap-[4px] group">
        {isFemale ? (
        <Svg
          id={'icon-female'}
          size={24}
          px
          className="fill-transparent stroke-[#54ADFF] "
        />
      ) : (
        <Svg
          id={'icon-male'}
          size={24}
          px
          className="fill-transparent stroke-[#3498db] "
        />
      )}
          <p className="text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide ">
            {pet.sex}
          </p>
        </div>
      </div>
      <BasicModal
        isOpen={isLearnMoreModalOpen}
        onCloseModal={handleCloseLearnMoreModal}
      >
        <LearnMore
          onOpenAtentionModal={handleOpenAttentionModal}
          onCloseModal={handleCloseLearnMoreModal}
        />
      </BasicModal>
      <BasicModal
        isOpen={isAttentionModalOpen}
        onCloseModal={handleCloseAttentionModal}
      >
        <AttentionModal />
      </BasicModal>
      <BasicModal
        isOpen={isDeleteModalOpen}
        onCloseModal={handleCloseDeleteModal}
      >
        <DeleteModal
          id={pet._id}
          title={pet.type}
          nameToDelete={pet.title}
          onCloseModal={handleCloseDeleteModal}
        />
      </BasicModal>
    </>
  );
};

export default PetCard;
