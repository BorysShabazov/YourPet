import { createContext, useState } from 'react';
import AddForm from './AddForm';
import AddPetFormTitle from './CustomFormComponents/AddPetFormTitle';
import AddPetProgressBar from './CustomFormComponents/AddPetProgressBar';
import BackgroundContainer from './BackgroundContainer';

export const AddPetFormContext = createContext(null);

const AddPetForm = () => {
  const [category, setCategory] = useState('own');
  const [step, setStep] = useState(1);
  return (
    <AddPetFormContext.Provider
      value={{ category, setCategory, step, setStep }}
    >
      <BackgroundContainer>
        <div
          className={`container mx-auto w-fit h-fit mb-[24px] px-[8px] pt-[20px] pb-[9px] bg-white rounded-[40px] shadow-default md:px-[32px] md:pb-[20px]`}
        >
          <AddPetFormTitle category={category} step={step} />
          <AddPetProgressBar />
          <AddForm />
        </div>
      </BackgroundContainer>
    </AddPetFormContext.Provider>
  );
};

export default AddPetForm;
