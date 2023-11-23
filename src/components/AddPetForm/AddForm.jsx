import { useRef, useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import ChooseOptionSection from './ChooseOptionForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import MoreInfoForm from './MoreInfoForm';
import {
  firstValidationSchema,
  secondValidationSchema,
  lastValidationSchema,
} from '../../schemas/AddPetFormSchemas';
import Svg from '../Svg/Svg';
import { useLocation, useNavigate } from 'react-router';

const AddForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const previousLocation = useLocation();
  const backLinkLocationRef = useRef(previousLocation.state ?? '/');

  const goBack = () => {
    step > 1
      ? setStep((prevStep) => prevStep - 1)
      : navigate(backLinkLocationRef.current);
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

  return (
    <Formik
      initialValues={{
        category: 'own',
        title: 'aa',
        name: 'aaa',
        birth: '12-12-1212',
        type: 'male',
        sex: '',
        petAvatarURL: null,
        price: '2',
        location: 'sdcsdv',
        comments: 'ascasc',
      }}
      validationSchema={
        (step === 1 && firstValidationSchema) ||
        (step === 2 && secondValidationSchema) ||
        (step === 3 && lastValidationSchema)
      }
      onSubmit={(values) => {
        if (step === 3) {
          const formData = createFormData(values);

          fetch('https://httpbin.org/post', {
            method: 'POST',
            body: formData,
          })
            .then((res) => res.json())
            .then(console.log);

          navigate(backLinkLocationRef.current);
          return;
        }

        step < 3 && setStep((prevStep) => prevStep + 1);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        setFieldValue,
        errors,
        values: {
          category,
          title,
          name,
          birth,
          type,
          sex,
          petAvatarURL,
          price,
          location,
          comments,
        },
      }) => (
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          {step === 1 && (
            <ChooseOptionSection callback={handleChange} category={category} />
          )}
          {step === 2 && (
            <PersonalDetailsForm
              errors={errors}
              category={category}
              title={title}
              name={name}
              birth={birth}
              type={type}
            />
          )}
          {step === 3 && (
            <MoreInfoForm
              setPhoto={(file) => {
                setFieldValue('petAvatarURL', file);
              }}
              category={category}
              errors={errors}
              sex={sex}
              price={price}
              location={location}
              petAvatarURL={petAvatarURL}
              comments={comments}
            />
          )}

          <div className="flex flex-col justify-center px-[4px] w-[100%] gap-[4px] md:flex-row-reverse md">
            <button
              type="button"
              className="px-[16px] py-[8px] rounded-[40px] flex justify-center items-center gap-[12px] w-[100%] text-sm font-medium font-manrope tracking-wide bg-blue text-background md:px-[28px] md:w-[248px] border border-blue"
              onClick={handleSubmit}
            >
              {step === 3 ? 'Done' : 'Next'}
              <Svg id="icon-pawprint" className="w-fit" fill="white" />
            </button>
            <button
              type="button"
              className="px-[16px] py-[8px] rounded-[40px] flex justify-center items-center gap-[12px] w-[100%]  text-sm font-medium font-manrope tracking-wide text-blue hover:border hover:border-blue md:w-[116px]"
              onClick={goBack}
            >
              <Svg id="icon-arrow-left" className="w-fit" stroke="#54ADFF" />
              {step === 1 ? 'Сancel' : 'Back'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddForm;
