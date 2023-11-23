import AddForm from './AddForm';
import AddPetFormTitle from './AddPetFormTitle';
import AddPetProgressBar from './AddPetProgressBar';
import BackgroundContainer from './BackgroundContainer';

const AddPetForm = () => {
  return (
    <BackgroundContainer>
      <div
        className={`container mx-auto w-fit h-fit mb-[24px] px-[8px] pt-[20px] pb-[9px] bg-white rounded-[40px] shadow-default md:px-[32px] md:pb-[20px]`}
      >
        <AddPetFormTitle text={'Add pet'} step={3} />
        <AddPetProgressBar />
        <AddForm />
      </div>
    </BackgroundContainer>
  );
};

export default AddPetForm;
