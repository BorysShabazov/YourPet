import { useContext, useRef } from 'react';
import { Form, Formik } from 'formik';
import ChooseOptionSection from './FormSections/ChooseOptionSection';
import PersonalDetailsSection from './FormSections/PersonalDetailsSection';
import MoreInfoSection from './FormSections/MoreInfoSection';
import {
  firstValidationSchema,
  secondValidationSchema,
  lastValidationSchema,
} from '../../schemas/AddPetFormSchemas';
import Svg from '../Svg/Svg';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createPet } from '../../Redux/pets/petsOperation';
import { createNotice } from '../../Redux/notices/noticesOperation';
import { AddPetFormContext } from './AddPetForm';
import { getIsLoadingPets } from '../../Redux/pets/petsSelectors';
import { formatRawDate } from '../../helpers/formatRawDate';
import { getIsLoadingNotice } from '../../Redux/notices/noticesSelectors';

const buttonStyles =
  'px-[16px] py-[8px] rounded-[40px] flex justify-center items-center gap-[12px] w-[100%] text-sm font-medium font-manrope tracking-wide';

const AddForm = () => {
  const { step, setStep, category, setCategory } =
    useContext(AddPetFormContext);
  const isAddingPet = useSelector(getIsLoadingPets);
  const isAddingNotice = useSelector(getIsLoadingNotice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const previousLocation = useLocation();
  const backLinkLocationRef = useRef(previousLocation.state ?? '/');

  const goBack = () => {
    step > 1
      ? setStep((prevStep) => prevStep - 1)
      : navigate(backLinkLocationRef.current);

    if (step === 2) {
      setCategory('own');
    }
  };

  const createFormData = (data) => {
    const formData = new FormData();

    formData.append('category', data.category);
    formData.append('type', data.type);
    formData.append('sex', data.sex);
    formData.append('image', data.petImage);
    formData.append('comments', data.comments);

    if (data.category !== 'found') {
      formData.append('name', data.name);
      formData.append('birthDate', data.birth);
    }
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
        category: category,
        title: '',
        name: '',
        birth: formatRawDate(new Date()),
        type: '',
        sex: '',
        petImage: null,
        price: '',
        location: '',
        comments: '',
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={
        (step === 1 && firstValidationSchema) ||
        (step === 2 && secondValidationSchema) ||
        (step === 3 && lastValidationSchema)
      }
      onSubmit={(values, actions) => {
        if (step === 1) setCategory(values.category);

        if (step === 3) {
          const formData = createFormData(values);

          dispatch(
            category === 'own' ? createPet(formData) : createNotice(formData),
          ).then((res) => {
            if (!res.error) {
              actions.resetForm();
              navigate(category === 'own' ? '/user' : '/notices/sell');
            }
          });
        }

        step < 3 && setStep((prevStep) => prevStep + 1);
      }}
    >
      {({
        handleSubmit,
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
          {step === 1 && <ChooseOptionSection category={category} />}
          {step === 2 && (
            <PersonalDetailsSection
              setFieldValue={setFieldValue}
              errors={errors}
              category={category}
              title={title}
              name={name}
              birth={birth}
              type={type}
            />
          )}
          {step === 3 && (
            <MoreInfoSection
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
              className={`${buttonStyles} border ${
                isAddingPet || isAddingNotice
                  ? 'bg-lightBlue border-lightBlue'
                  : 'bg-blue border-blue hover:blue-gradient'
              }  text-background md:px-[28px] md:w-[248px] `}
              disabled={isAddingPet || isAddingNotice}
              onClick={handleSubmit}
            >
              {step === 3 ? 'Done' : 'Next'}
              <Svg id="icon-pawprint" className="w-fit" fill="white" />
            </button>
            <button
              type="button"
              className={`${buttonStyles} text-blue hover:border hover:border-blue md:w-[116px]`}
              disabled={isAddingPet || isAddingNotice}
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
