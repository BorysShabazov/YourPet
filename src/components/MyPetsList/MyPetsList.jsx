import { useDispatch, useSelector } from 'react-redux';
import MyPetsCard from '../../components/MyPetsCard/MyPetsCard';
import { getPets } from '../../Redux/pets/petsSelectors';
import { useEffect, useState } from 'react';
import { fetchPets } from '../../Redux/pets/petsOperation';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import MiniLoader from '../MiniLoader/MiniLoader';
import { Pagination } from './Pagination';

export const MyPetsList = () => {
  const dispatch = useDispatch();
  const petsList = useSelector(getPets);
  const isLoadingPets = useSelector((state) => state.pets.isLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage, setPetsPerPage] = useState(3);

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = petsList.slice(indexOfFirstPet, indexOfLastPet);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {!isLoadingPets ? (
          <ul
            className={`flex flex-col gap-[20px] ${
              petsList.length > 3 && 'xl:h-[650px]'
            }`}
          >
            {petsList.length > 0 ? (
              currentPets.map((el) => (
                <li key={el._id} className="mx-auto">
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
        {petsList.length > 0 && petsPerPage !== petsList.length && (
          <Pagination
            petsPerPage={petsPerPage}
            totalPets={petsList.length}
            paginate={paginate}
          />
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
          currentPage={currentPage}
        />
      </BasicModal>
    </>
  );
};
