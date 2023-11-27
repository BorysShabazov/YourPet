import Svg from '../../Svg/Svg';

const Congrats = ({ onCloseModal }) => {
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   // Перевірка локального сховища для конкретного користувача
  //   const userId = getUserId(); // Замініть це на власний спосіб отримання ідентифікатора користувача

  //   const hasUserSeenModal = localStorage.getItem(`hasUserSeenModal_${userId}`);

  //   if (!hasUserSeenModal || hasUserSeenModal === 'false') {
  //     // Якщо модалка ще не відображалася для цього користувача, відобразити її
  //     setShowModal(true);

  //     // Оновлення локального сховища для позначення того, що модалка вже була відображена для цього користувача
  //     localStorage.setItem(`hasUserSeenModal_${userId}`, 'true');
  //   }
  // }, []);

  // // Функція для отримання ідентифікатора користувача (замініть це на вашу власну логіку)
  // const getUserId = () => {
  //   // Наприклад, можливо, у вас є авторизація і ви можете отримати ID користувача
  //   // або використовуйте інші унікальні дані користувача для ідентифікації.
  //   // Приклад:
  //   // const userId = getCurrentUserId(); // Ваша функція отримання ID користувача
  //   // return userId;
  // };

  return (
    <div className=" text-center my-12 w-72 md:w-[608px]">
      <h3 className=" text-neutral-900 text-2xl md:text-4xl font-medium font-['Manrope'] tracking-wide">
        Congrats!
      </h3>
      <p className=" mt-6 mb-10 md:mt-14 md:mb-16 text-neutral-900 text-base md:text-2xl  font-medium font-['Manrope'] tracking-wide">
        Youre registration is success
      </p>
      <button
        onClick={onCloseModal}
        type="button"
        className="w-60 h-10 px-7 py-2 bg-blue hover:blue-gradient rounded-3xl justify-center items-center gap-3 inline-flex  text-white text-base font-bold font-['Manrope'] tracking-wide"
      >
        Go to profile
        <span>
          <Svg
            id={'icon-pawprint'}
            size={'24px'}
            stroke={'white'}
            fill={'white'}
          />
        </span>
      </button>
    </div>
  );
};

export default Congrats;

// Це треба додати до <Link .../>  у компоненті реєстрації ( state: { from: '/registration' } )
// типу такого:  <Link to={{ pathname: '/user', state: { from: '/registration' } }}>
// Go to UserPage
// </Link>

// Це додати до UserPage.jsx
//    const location = useLocation();
// const [isCongratsModalOpen, setShowCongratsModal] = useState(false);

// useEffect(() => {
//if (location.state && location.state.from === '/registration') {
//setShowCongratsModal(true);
//}
//}, [location]);

// const handleCloseCongratsModal = () => {
//   setShowCongratsModal(false);
// }

// <BasicModal
// isOpen={isCongratsModalOpen}
//         onCloseModal={handleCloseCongratsModal}>
//     <Congrats onCloseModal={handleCloseCongratsModal}/>
//     </BasicModal>
