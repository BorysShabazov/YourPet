import { useRef, useState } from 'react';
import { Form, Formik } from 'formik';
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
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createPets } from '../../Redux/pets/petsOperation';

const AddForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    formData.append('name', data.name);
    formData.append('birthDate', data.birth);
    formData.append('type', data.type);
    formData.append('sex', data.sex);
    formData.append('image', data.petImage);
    formData.append('comments', data.comments);

    if (data.category !== 'own') {
      formData.append('title', data.title);
      formData.append('location', data.location);
    }
    if (data.category === 'sell') formData.append('price', data.price);

    return formData;
  };

  return (
    <Formik
      initialValues={{
        category: 'own',
        title: 'i need you',
        name: 'batman',
        birth: '12-12-1212',
        type: 'bat',
        sex: 'male',
        petImage: null,
        price: '123456789',
        location: 'gotem',
        comments: 'sykablya ia hochy spaty',
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={
        (step === 1 && firstValidationSchema) ||
        (step === 2 && secondValidationSchema) ||
        (step === 3 && lastValidationSchema)
      }
      onSubmit={(data) => {
        if (step === 3) {
          const formData = createFormData(data);

          dispatch(createPets(formData));
          //   axios
          //     .post('/notices', formData, {
          //       headers: {
          //         'Content-Type': 'multipart/form-data',
          //       },
          //     })
          //     .then((res) => res.json())
          //     .then(console.log);
          //   // navigate(backLinkLocationRef.current);
          //   return;
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
          petImage,
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
                setFieldValue('petImage', file);
              }}
              category={category}
              errors={errors}
              sex={sex}
              price={price}
              location={location}
              petImage={petImage}
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
