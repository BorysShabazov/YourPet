import { useDispatch } from 'react-redux';
import { deleteNotice } from '../../../Redux/notices/noticesOperation';
import Svg from '../../Svg/Svg';
import { deletePet } from '../../../Redux/pets/petsOperation';

const DeleteModal = ({ id = { id }, onCloseModal, title, nameToDelete }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    if (title === 'adverstiment') {
      dispatch(deleteNotice(id));
      onCloseModal();
      return;
    }
    dispatch(deletePet(id));
    onCloseModal();
  };

  return (
    <div className="md:max-w-2xl text-center py-12 smOnly:px-3 md:px-28 bg-white rounded-3xl">
      <h3 className="text-black text-3xl font-bold font-manrope">
        Delete {title}?
      </h3>
      <div className="smOnly:w-60 md:w-96 mt-10 text-center">
        <p className="text-black text-base font-medium font-manrope md:text-xl">
          Are you sure you want to delete
          <br />
          <span className="font-bold">'{nameToDelete}'?</span>
          <br />
          You can`t undo this action.
        </p>
      </div>

      <div className=" smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 } mt-12 ">
        <button
          onClick={onCloseModal}
          className="Frame36 hover:blue-gradient hover:text-white smOnly:w-64 smOnly:h-10 w-32 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-manrope tracking-wide"
        >
          Cancel
        </button>

        <button
          onClick={onDelete}
          className="Frame35 smOnly:w-64 smOnly:h-10  md:ml-4 w-32 px-5 py-2 bg-blue hover:blue-gradient rounded-3xl justify-center items-center gap-2 inline-flex text-stone-50 text-base font-bold font-manrope tracking-wide"
        >
          Delete
          <span>
            <Svg
              id={'icon-trash'}
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

export default DeleteModal;

// Також можно перевикористати компонент для  видалення своїх улюбленців
//Треба передати у компонент
//  const title = 'your pet';
//const nameToDelete = "Сute dog looking  for a home";

// Повісити на кнопку видалення
//onClick={()=>handleOpenDeleteModal(el.id)}

// const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
// const [id, setId] = useState(null);
// const handleOpenDeleteModal = (id) => {
//     setDeleteModalOpen(true);
// setId(id);
//   };
//   const handleCloseDeleteModal = () => {
//     setDeleteModalOpen(false);
//     setId(null);
//   };

{
  /* <BasicModal 
isOpen={isDeleteModalOpen}
        onCloseModal={handleCloseDeleteModal}>
      <DeleteModal id={id} title={title} nameToDelete={nameToDelete} onCloseModal={handleCloseDeleteModal}/>
      </BasicModal>
    */
}
