import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../Redux/auth/auth-selectors";
import ButtonAddToFavorites from "./ButtonAddToFavorites";
import ListOfNotice from "./ListInfoOfNotice";
import ButtonContact from "./ButtonContact";
import { getNoticeById } from "../../../Redux/notices/noticesOperation";
import { getSelectedNotice } from "../../../Redux/notices/noticesSelectors";

const data = {
  group: 'In good hands',
  title: 'Сute dog looking for a home',
  name: 'Pesto',
  birthday: '21.09.2020',
  type: 'Dog',
  place: 'Kharkiv',
  the_sex: 'male',
  email: 'user@mail.com',
  phone: '+380123456789',
  price: '$250',
  comments: ' Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!',
 };


const LearnMore = ({ onCloseModal, onOpenAtentionModal}) => {
  const [isAddToFavorite, setAddToFavorite] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const data = useSelector(getSelectedNotice);

  console.log('isLoggedIn: ', isLoggedIn);


  const addToFavorites = () => {

    if (isLoggedIn) {
      if(isAddToFavorite) {
        // Функція для видалення з улюблені

        setAddToFavorite(false);
        console.log('Видалення з улюблених');
        return;
      }
      // Функція для додавання в улюблені
      setAddToFavorite(true);
      console.log('Додавання в улюблені');
    } else {
      // Відкриття модалки Atention для входу або реєстрації
      console.log('Відкриття модалки Attention')
      onCloseModal();
      onOpenAtentionModal();
        }
  };

  return (
   <>
     <div className=" smOnly:w-64 md:w-[633px]">
      <div className="md:flex ">
        <div className="flex relative justify-center items-center smOnly:mt-8">
        <p className=" InGoodHands py-2 px-3 rounded-e-2xl bg-lightBlue text-neutral-900 text-sm font-medium font-['Manrope'] top-4 smOnly: left-2 md:left-0 absolute">{data.group}</p>
          <img
            src="/src/images/Rectangle24.png"
            alt="dog"
            className="Rectangle303 smOnly:w-60 smOnly:h-60 md:w-[262px] md:h-[298px] rounded-bl-3xl rounded-br-3xl"
          />
        </div>
 <div className="md:ml-6">
 <h2 className=" text-black text-2xl smOnly:mt-3 sm: w-52 font-bold font-['Manrope']">
          {data.title}
        </h2>
 <ListOfNotice data={data}/>
 </div>
      </div>
      <p className=" mt-3 text-black text-sm font-semibold font-['Manrope'] tracking-wide">Comments: <span className="text-black text-sm font-medium font-['Manrope'] tracking-wide">{data.comments}</span></p>
      <div className="button-container flex gap-4 smOnly:mt-3 md:mt-16 smOnly:flex-col md:justify-end">
      <ButtonAddToFavorites isAddToFavorite={isAddToFavorite} addToFavorites={addToFavorites}/>
      <ButtonContact data={data}/>
      </div>
    </div>
   </>
  );
};

export default LearnMore;
//повісити на кнопку LearnMore та передати id 
// onClick={()=>handleOpenLearnMoreModal(el.id)}

// const dispatch = useDispatch();
// const [isLearnMoreModalOpen, setLearnMoreModalOpen] = useState(false);
// const [isAttentionModalOpen, setAttentionModalOpen] = useState(false);

// const handleOpenAttentionModal = () => {
//     setAttentionModalOpen(true);
//   };
//   const handleCloseAttentionModal = () => {
//     setAttentionModalOpen(false);
//   };

// const handleOpenLearnMoreModal = (id) => {
//     setLearnMoreModalOpen(true);
//     dispatch(getNoticeById(id));
//   };
//   const handleCloseLearnMoreModal = () => {
//     setLearnMoreModalOpen(false);
//   };

{/* <BasicModal 
isOpen={isLearnMoreModalOpen}
        onCloseModal={handleCloseLearnMoreModal}>
             <LearnMore onOpenAtentionModal={handleOpenAttentionModal} onCloseModal={handleCloseLearnMoreModal} />
        </BasicModal> */}
        // <BasicModal
        // isOpen={isAttentionModalOpen}
        //         onCloseModal={handleCloseAttentionModal}>
        //        <AttentionModal  />
        //       </BasicModal>
