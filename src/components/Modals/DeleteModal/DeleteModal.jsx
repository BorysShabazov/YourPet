import Svg from "../../Svg/Svg";

const DeleteModal = ({ onCloseModal, title, nameToDelete }) => {
    // Ще треба додати функцію видалення певного оголошення

  return (
    <div className="Frame32 md:max-w-2xl text-center py-12 smOnly:px-3 md:px-28 bg-white rounded-3xl">
    <h3 className="DeleteAdverstiment  text-black text-3xl font-bold font-['Manrope']">Delete {title}?</h3>
    <div className="  smOnly:w-60 md:w-96 mt-10 text-center">
    <span className="text-black text-base font-medium font-['Manrope']">Are you sure you want to delete  </span>
    <span className="text-black text-base font-bold font-['Manrope']">`{nameToDelete}`</span>
    <span className="text-black text-base font-medium font-['Manrope']">? <br/>You can`t undo this action.</span>
    </div>
    
   <div className=" smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 } mt-12 " >
   <button onClick={onCloseModal} className="Frame36 hover:bg-gradient-to-l from-blue to-lightBlue hover:text-white smOnly:w-64 smOnly:h-10 w-32 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope'] tracking-wide">
    Cancel        </button>
    <button className="Frame35 smOnly:w-64 smOnly:h-10  md:ml-4 w-32 px-5 py-2 bg-blue hover:bg-gradient-to-l from-blue to-lightBlue  rounded-3xl justify-center items-center gap-2 inline-flex text-stone-50 text-base font-bold font-['Manrope'] tracking-wide">
    Yes<span><Svg Svg id={'icon-trash'} size={'24px'} stroke={'white'} fill={'#54ADFF'}/></span>
    </button>
   </div>
  </div>
  )
}

export default DeleteModal;
// Також можно перевикористати компонент для  видалення своїх улюбленців 
// Для тесту 
//  const title = 'your pet';
//const nameToDelete = "Сute dog looking  for a home";

// const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

// const handleOpenDeleteModal = () => {
//     setDeleteModalOpen(true);

//   };
//   const handleCloseDeleteModal = () => {
//     setDeleteModalOpen(false);
//   };

{/* <BasicModal 
isOpen={isDeleteModalOpen}
        onCloseModal={handleCloseDeleteModal}>
      <DeleteModal onCloseModal={handleCloseDeleteModal}/>
      </BasicModal>
    */}