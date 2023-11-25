import { useState } from 'react';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';
import { BasicModal } from '../Modals/BasicModal/BasicModal';

const MyPetsCard = ({ id, photo, name, birth, type, comments }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleTogleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <>
      <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[16px] pb-[24px] px-[20px] md:w-[703px] md:flex xl:w-[821px] md:gap-5">
        <div className="w-60 rounded-[20px] justify-center flex smOnly:mb-[20px] ">
          <img
            className="w-full h-[240px] rounded-[40px] object-cover md:w-[128px] md:h-[128px] xl:w-[161px] xl:h-[161px]"
            src={photo}
          />
        </div>
        <div className="relative w-full">
          <div
            onClick={handleTogleDeleteModal}
            className="absolute top-[-4px] right-[0]"
          >
            <DeleteIcon />
          </div>
          <ul className="flex flex-col gap-[12px]">
            <li>
              <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                  Name:
                </span>{' '}
                {name}
              </p>
            </li>
            <li>
              <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                  Date of birth:
                </span>{' '}
                {birth}
              </p>
            </li>
            <li>
              <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                  Type:
                </span>{' '}
                {type}
              </p>
            </li>
            <li>
              <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                  Comments:
                </span>{' '}
                {comments}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <BasicModal
        isOpen={isDeleteModalOpen}
        onCloseModal={handleTogleDeleteModal}
      >
        <DeleteModal
          title={'yuor pet'}
          nameToDelete={name}
          id={id}
          onCloseModal={handleTogleDeleteModal}
        />
      </BasicModal>
    </>
  );
};
export default MyPetsCard;
