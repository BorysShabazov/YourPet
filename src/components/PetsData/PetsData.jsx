import PetsList from '../PetsList/PetsList';

// Подія на Button "Add Pat + "  (!)

import {Title} from "../../ui/Title/Title";
import css from './PetsData.module.css';

const PetsData = ({ pets }) => {
  return (
    <>
      <div className={css.PetsHeader}>
        <Title>My pets:</Title>
        <button type="button" className={css.AddPetBtn}>Add pet</button>
      </div>

      {!pets.length && (
          <p className={css.NoPetsMessage}>You don't have a pet yet. Click the "Add Pet" button.</p>
      )}
      {pets.length && <PetsList pets={pets} />}
      
    </>
  );
};

export default PetsData;