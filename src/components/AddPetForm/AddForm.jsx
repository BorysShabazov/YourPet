import { useState } from 'react';
import { useFormik } from 'formik';
import ChooseOptionSection from './ChooseOptionForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import MoreInfoForm from './MoreInfoForm';

const AddForm = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      category: 'own',
      title: '',
      name: '',
      birth: '',
      type: '',
      petAvatarURL: '',
      comments: '',
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const goNext = () => {
    if (step === 3) {
      formik.handleSubmit();
      return;
    }
    step < 3 && setStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    step > 1
      ? setStep((prevStep) => prevStep - 1)
      : console.log('This is the end!');
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {step === 1 && (
        <ChooseOptionSection
          callback={formik.handleChange}
          category={formik.values.category}
        />
      )}
      {step === 2 && (
        <PersonalDetailsForm
          callback={formik.handleChange}
          category={formik.values.category}
          name={formik.values.name}
          birth={formik.values.birth}
          type={formik.values.type}
        />
      )}
      {step === 3 && (
        <MoreInfoForm
          callback={formik.handleChange}
          category={formik.values.category}
        />
      )}

      <div className="flex flex-col px-[4px] w-[100%] gap-[4px]">
        <button
          type="button"
          className="px-[16px] py-[8px] rounded-[40px] justify-center items-center w-[100%] text-sm font-medium font-manrope tracking-wide bg-blue text-background"
          onClick={goNext}
        >
          Next
        </button>
        <button
          type="button"
          className="px-[16px] py-[8px] rounded-[40px] justify-center items-center w-[100%]  text-sm font-medium font-manrope tracking-wide text-blue"
          onClick={goBack}
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default AddForm;
