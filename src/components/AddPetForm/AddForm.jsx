import { useState } from 'react';
import { useFormik } from 'formik';
import ChooseOptionSection from './ChooseOptionForm';

const AddForm = () => {
  const [step, setStep] = useState('first');

  const formik = useFormik({
    initialValues: {
      category: 'own',
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {step === 'first' && (
        <ChooseOptionSection
          callback={formik.handleChange}
          category={formik.values.category}
        />
      )}

      <div className="flex flex-col px-[4px] w-[100%] gap-[4px]">
        <button
          type="button"
          className="px-[16px] py-[8px] rounded-[40px] justify-center items-center w-[100%]  text-sm font-medium font-manrope tracking-wide bg-blue text-background"
        >
          Next
        </button>
        <button
          type="button"
          className="px-[16px] py-[8px] rounded-[40px] justify-center items-center w-[100%]  text-sm font-medium font-manrope tracking-wide text-blue"
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default AddForm;
