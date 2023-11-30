import { useDispatch, useSelector } from 'react-redux';
import MyPetsCard from '../../components/MyPetsCard/MyPetsCard';
import { getPetsData } from '../../Redux/pets/petsSelectors';
import { useEffect, useState } from 'react';
import { fetchPets } from '../../Redux/pets/petsOperation';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';
import { BasicModal } from '../Modals/BasicModal/BasicModal';
import MiniLoader from '../MiniLoader/MiniLoader';
import { Pagination } from './Pagination';

export const MyPetsList = () => {
  const dispatch = useDispatch();

  const { items: petsList, total, qty } = useSelector(getPetsData);
  const isLoadingPets = useSelector((state) => state.pets.isLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 4;
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    dispatch(fetchPets({ page: currentPage, limit: petsPerPage }));
  }, [currentPage, dispatch, petsPerPage]);

  useEffect(() => {
    setMaxPages(Math.ceil(total / petsPerPage));
  }, [total]);

  useEffect(() => {
    if (petsList.length <= 0 && currentPage >= 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [petsList, currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setCurrentName] = useState(null);

  const handleTogleDeleteModal = (id, name) => {
    setDeleteModalOpen(!isDeleteModalOpen);
    setCurrentId(id);
    setCurrentName(name);
  };

  return (
    <>
      <div>
        {!isLoadingPets && petsList ? (
          <>
            <ul className={`flex flex-col gap-[20px]`}>
              {petsList.length > 0 ? (
                petsList.map((el) => (
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
            {petsList.length !== total && petsList.length !== 0 && (
              <Pagination
                petsPerPage={petsPerPage}
                maxPages={maxPages}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </>
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
