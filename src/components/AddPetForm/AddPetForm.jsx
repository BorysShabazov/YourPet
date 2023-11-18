import AddForm from './AddForm';
import AddPetFormTitle from './AddPetFormTitle';
import AddPetProgressBar from './AddPetProgressBar';
import BackgroundContainer from './BackgroundContainer';

const AddPetForm = () => {
  return (
    <>
      <BackgroundContainer>
        <div className="container mx-auto w-[280px] h-fit mb-[24px] px-[8px] py-[20px] bg-white rounded-[40px] shadow-default">
          <AddPetFormTitle text={'Add pet'} />
          <AddPetProgressBar />
          <AddForm />
        </div>
      </BackgroundContainer>
    </>
  );
};

export default AddPetForm;
