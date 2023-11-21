import { useState } from 'react';
import { useFormik } from 'formik';
import ChooseOptionSection from './ChooseOptionForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import MoreInfoForm from './MoreInfoForm';
import {
  firstValidationSchema,
  secondValidationSchema,
  lastValidationSchema,
} from '../../schemas/AddPetFormSchemas';
import Svg from '../Svg/Svg';

const AddForm = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      category: 'own',
      title: 'ф',
      name: 'фв',
      birth: '12-12-1212',
      type: 'фв',
      sex: '',
      petAvatarURL: null,
      price: '',
      location: '',
      comments: '',
    },
    validateOnChange: false,
    validationSchema:
      (step === 1 && firstValidationSchema) ||
      (step === 2 && secondValidationSchema) ||
      (step === 3 && lastValidationSchema),

    onSubmit: (values) => {
      if (step === 3) {
        const formData = createFormData(values);

        fetch('https://httpbin.org/post', {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.json())
          .then(console.log);

        return;
      }

      step < 3 && setStep((prevStep) => prevStep + 1);
    },
  });

  const goBack = () => {
    step > 1
      ? setStep((prevStep) => prevStep - 1)
      : console.log('This is the end!');
  };

  const createFormData = (data) => {
    const formData = new FormData();

    formData.append('category', data.category);
    formData.append('title', data.title);
    formData.append('name', data.name);
    formData.append('birthDate', data.birth);
    formData.append('type', data.type);
    formData.append('sex', data.sex);
    formData.append('image', data.petAvatarURL);
    formData.append('price', data.price);
    formData.append('location', data.location);
    formData.append('comments', data.comments);

    return formData;
  };

  const {
    category,
    title,
    name,
    birth,
    type,
    sex,
    price,
    location,
    petAvatarURL,
    comments,
  } = formik.values;

  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      {step === 1 && (
        <ChooseOptionSection
          callback={formik.handleChange}
          category={category}
          errors={formik.errors}
        />
      )}
      {step === 2 && (
        <PersonalDetailsForm
          callback={formik.handleChange}
          errors={formik.errors}
          category={category}
          title={title}
          name={name}
          birth={birth}
          type={type}
        />
      )}
      {step === 3 && (
        <MoreInfoForm
          callback={formik.handleChange}
          setPhoto={(file) => {
            formik.setFieldValue('petAvatarURL', file);
          }}
          category={category}
          errors={formik.errors}
          sex={sex}
          price={price}
          location={location}
          petAvatarURL={petAvatarURL}
          comments={comments}
        />
      )}

      <div className="flex flex-col px-[4px] w-[100%] gap-[4px]">
        <button
          type="button"
          className="px-[16px] py-[8px] rounded-[40px] flex justify-center items-center gap-[12px] w-[100%] text-sm font-medium font-manrope tracking-wide bg-blue text-background"
          onClick={formik.handleSubmit}
        >
          <p>Next</p>
          <Svg id="icon-pawprint" className="w-fit" fill="white" />
        </button>
        <button
          type="button"
          className="px-[16px] py-[8px] rounded-[40px] flex justify-center items-center gap-[12px] w-[100%]  text-sm font-medium font-manrope tracking-wide text-blue"
          onClick={goBack}
        >
          <Svg id="icon-arrow-left" className="w-fit" stroke="#54ADFF" />
          Back
        </button>
      </div>
    </form>
  );
};

export default AddForm;
