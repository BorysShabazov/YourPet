import { useDispatch, useSelector } from 'react-redux';
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from 'date-fns';
import {
  addToFavorite,
  getNoticeById,
} from '../../Redux/notices/noticesOperation';
import Svg from '../Svg/Svg';
import { useState } from 'react';
import LearnMore from '../Modals/LearnMore/LearnMore';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import AttentionModal from '../Modals/Attention/Attention';
import { getIsLoggedIn, getUser } from '../../Redux/auth/auth-selectors';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';

const PetCard = ({ pet }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);

  const isFemale = pet.sex === 'female';
  const newWord = (word, qty) => {
    if (word && word.length && qty) {
      if (word.length > qty) {
        return word.slice(0, qty) + '...';
      } else {
        return word;
      }
    } else {
      return word || '';
    }
  };

  let shortedWord = newWord(pet.location, 4);
  const birthDate = new Date(pet.birthDate);

  const currentDate = new Date();

  const ageInMonths =
    currentDate.getMonth() -
    birthDate.getMonth() +
    12 * (currentDate.getFullYear() - birthDate.getFullYear());

  let age;

  if (ageInMonths < 1) {
    const days = Math.ceil((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    age = days === 1 ? `${days} day` : `${days} days`;
  } else if (ageInMonths < 12) {
    age = `${ageInMonths} mth`;
  } else {
    const year = Math.ceil(currentDate.getFullYear() - birthDate.getFullYear());
    age = year === 1 ? `${year} year` : `${year} years`;
  }

  const dispatch = useDispatch();
  const [isLearnMoreModalOpen, setLearnMoreModalOpen] = useState(false);
  const [isAttentionModalOpen, setAttentionModalOpen] = useState(false);

  const handleOpenAttentionModal = () => {
    setAttentionModalOpen(true);
  };

  const handleCloseAttentionModal = () => {
    setAttentionModalOpen(false);
  };

  const handleOpenLearnMoreModal = (id) => {
    setLearnMoreModalOpen(true);
    dispatch(getNoticeById(id));
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

  const isFavorite = (pet) => pet?.inFavorites?.includes(user?._id);
  const data = pet;

  return (
    <>
      <div className=" w-[288px] h-[456px]  pb-[24px]  mdOnly:w-[336px] smOnly:w-[280px] relative hover:shadow-xl  bg-white rounded-bl-[40px] rounded-br-[40px] shadow-default hover:shadow-focus">
        <img
          className="h-[288px] w-[100%] object-cover"
          src={pet.imageURL}
          alt={pet.type}
        />

        <div className=" flex   w-[126px] h-[32px] px-[17px] py-[11px] left-0 top-[16px] absolute bg-lightBlue rounded-tr-2xl rounded-br-2xl  ">
          <p className=" flex items-center justify-center  w-[92px] h-[10px]  text-neutral-900 text-sm font-medium manrope">
            {pet.category}
          </p>
        </div>

        <div
          className="w-10 h-10 right-[12px] top-[12px] bg-lightBlue rounded-full absolute group cursor-pointer hover:bg-blue"
          onClick={
            isLoggedIn
              ? () => dispatch(addToFavorite({ data, user }))
              : () => handleOpenAttentionModal()
          }
        >
          <Svg
            id={'icon-heart'}
            size={24}
            className={
              isFavorite(pet)
                ? `left-[8px] fill-blue stroke-blue top-[9px] absolute group-hover:fill-lightBlue group-hover:stroke-lightBlue`
                : `left-[8px] fill-transparent stroke-blue top-[9px] absolute group-hover:fill-lightBlue group-hover:stroke-lightBlue`
            }
          />
        </div>

        {isLoggedIn && pet.owner === user?._id && (
          <div
            className="w-10 h-10 right-[12px] top-[68px] absolute group bg-lightBlue rounded-full cursor-pointer "
            onClick={() => handleOpenDeleteModal(pet?._id)}
          >
            <Svg
              id={'icon-trash'}
              size={24}
              className=" left-[8px] fill-transparent stroke-[#54ADFF] top-[9px] absolute group-hover:fill-[#54ADFF] "
            />
          </div>
        )}
        <p className="w-[231px] h-[66px] text-neutral-900 text-2xl font-bold manrope mt-[20px] ml-[20px]">
          {pet.title}
        </p>

        <button
          onClick={() => handleOpenLearnMoreModal(pet?._id)}
          className="hover:bg-gradient-to-l from-[#419EF1] to-[#9BD0FF] hover:text-white hover:border-none w-[248px] h-[38px] mx-[20px] mt-[20px] smOnly:mx-[16px] mdOnly:mx-[44px] mdOnly:h-[40px] rounded-[40px] border-2 border-[#54ADFF]  text-[#54ADFF] items-center pl-[78px]   flex manrope tracking-wide group"
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
            className="fill-transparent stroke-[#54ADFF]"
          />
          <p className="text-neutral-900 text-xs font-semibold manrope tracking-wide  ">
            {shortedWord}
          </p>
        </div>

        <div className=" w-[88px] px-1 py-0.5 left-[102px] smOnly:left-[96px] mdOnly:left-[124px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl justify-center items-center gap-[2px] inline-flex group">
          <Svg
            id={'icon-clock'}
            size={24}
            className="fill-transparent stroke-[#54ADFF] "
          />
          <p className="text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide ">
            {age}
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
          title={'adverstiment'}
          nameToDelete={pet.title}
          onCloseModal={handleCloseDeleteModal}
        />
      </BasicModal>
    </>
  );
};

export default PetCard;
