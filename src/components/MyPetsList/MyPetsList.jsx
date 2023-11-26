import { useDispatch, useSelector } from 'react-redux';
import MyPetsCard from '../../components/MyPetsCard/MyPetsCard';
import { getPets } from '../../Redux/pets/petsSelectors';
import { useEffect, useState } from 'react';
import { fetchPets } from '../../Redux/pets/petsOperation';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import MiniLoader from '../MiniLoader/MiniLoader';

// const pets = [
//   {
//     _id: 1,
//     imageURL:
//       'https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg',
//     name: 'Simba',
//     birthDate: '22.22.2022',
//     type: ' Persian cat',
//     comments:
//       " Simba is a red Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat.",
//   },
//   {
//     _id: 2,
//     imageURL:
//       'https://people.com/thmb/n6EdTmvAL3TkkAqrT47caD6tUu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(723x121:725x123)/wisp-the-cat-from-tiktok-092823-1-74797b02afe7475295e1478b2cdf2883.jpg',
//     name: 'Max',
//     birthDate: '13.11.2023',
//     type: ' Persian cat',
//     comments:
//       " Max is a white Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat.",
//   },
// ];

export const MyPetsList = () => {
  const dispatch = useDispatch();
  const petsList = useSelector(getPets);
  const isLoadingPets = useSelector((state) => state.pets.isLoading);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setCurrentName] = useState(null);

  const handleTogleDeleteModal = (id, name) => {
    setDeleteModalOpen(!isDeleteModalOpen);
    setCurrentId(id);
    setCurrentName(name);
  };

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      <div>
        {isLoadingPets ? (
          <ul className="flex flex-col gap-[20px]">
            {petsList.length > 0 ? (
              petsList.map((el) => (
                <li key={el._id}>
                  <MyPetsCard
                    photo={el.imageURL}
                    name={el.name}
                    birth={el.birthDate}
                    type={el.type}
                    comments={el.comments}
                    id={el._id}
                    handleTogleDeleteModal={handleTogleDeleteModal}
                  />
                </li>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-black font-medium font-['Manrope'] tracking-wide">{`You haven't added any pets yet`}</p>
              </div>
            )}
          </ul>
        ) : (
          <div className="w-full flex justify-center py-7">
            <MiniLoader />
          </div>
        )}
      </div>
      <BasicModal
        isOpen={isDeleteModalOpen}
        onCloseModal={handleTogleDeleteModal}
      >
        <DeleteModal
          title={'yuor pet'}
          nameToDelete={currentName}
          id={currentId}
          onCloseModal={handleTogleDeleteModal}
        />
      </BasicModal>
    </>
  );
};
