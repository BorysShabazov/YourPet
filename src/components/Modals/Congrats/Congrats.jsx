const Congrats = () => <p>Congrats</p>;

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