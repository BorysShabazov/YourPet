import PetsItem from '../PetsItem/PetsItem';

const PetsList = ({ pets }) => {
  return (
    <ul>
      {pets.map(pet => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </ul>
  );
};

export default PetsList;
