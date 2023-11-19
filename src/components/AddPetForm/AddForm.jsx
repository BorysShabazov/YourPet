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
      sex: '',
      petAvatarURL: null,
      price: '',
      location: '',
      comments: '',
    },

    onSubmit: (data) => {
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

      fetch('https://httpbin.org/post', { method: 'POST', body: formData })
        .then((res) => res.json())
        .then(console.log);
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

  const {
    category,
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
        />
      )}
      {step === 2 && (
        <PersonalDetailsForm
          callback={formik.handleChange}
          category={category}
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
