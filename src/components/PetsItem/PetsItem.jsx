// import deletePet ---- додати (!)
// import Modal  ---- додати (!)


import { format } from 'date-fns';
import css from './PetsItem.module.css';

const PetsItem = ({ pet }) => {

  const birthday = new Date(pet.birthday);
  const formatDate = format(birthday, 'dd.MM.yyyy');

  return (
    <>
      {!isDeleted && (
        <li className={css.MyPetCard}>
			
			<img className={css.PetImg} src={pet.url} alt={pet.alt} />
			
			<div className={css.PetInfo}>
  			  <div className={css.NameAndBtnWrapper}>
				 <div className={css.PetItem}>
				   <p className={css.PetTitleItem}>Name:&nbsp;
						<span className={css.PetTextItem}>{pet.name}</span>
				   </p>
				 </div>
				 <button type="button" clickHandler={handlerClick}> 
                    <span className={css.IconDelButton} stroke="#54ADFF"></span> 
                 </button>
			  </div>
  
			  <div className={css.PetItem}>
					<p className={css.PetTitleItem}>Date of birth:&nbsp;
						<span className={css.PetTextItem}>{formatDate}</span>
					</p>
			  </div>
  
			  <div className="PetItem">
					<p className={css.PetTitleItem}>Breed:&nbsp;
						<span className={css.PetTextItem}>{pet.breed}</span>
					</p>
			  </div>   
			  
			  <div className={css.PetItem}>
					<p className={css.PetComment}>Comments:&nbsp;
						<span className={css.PetTextItem}>{pet.comments}</span>
					</p>
			  </div>   
  
			</div>
	  </li>
      )}

      {/* {isModalOpen && (
        <Modal />
      )} */}

    </>
  );
};

export default PetsItem;


