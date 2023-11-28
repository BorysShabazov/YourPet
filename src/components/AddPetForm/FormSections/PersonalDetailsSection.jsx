import { CustomInput } from '../CustomFormComponents/CustomInput';
import { FormSectionContainer } from '../CustomFormComponents/FormSectionContainer';

const PersonalDetailsSection = ({
  errors,
  setFieldValue,
  category,
  title,
  name,
  birth,
  type,
}) => {
  return (
    <FormSectionContainer sectionName="personalDetails">
      {category !== 'own' && (
        <CustomInput
          name="title"
          value={title}
          placeholder="Title of add"
          error={errors.title}
        >
          Title of add
        </CustomInput>
      )}
      {category !== 'found' && (
        <>
          <CustomInput
            name="name"
            value={name}
            placeholder="Type name pet"
            error={errors.name}
          >
            Pet's name
          </CustomInput>
          <CustomInput
            name="birth"
            value={birth}
            type="date"
            callback={setFieldValue}
            error={errors.birth}
          >
            Date of birth
          </CustomInput>
        </>
      )}
      <CustomInput
        name="type"
        value={type}
        placeholder="Type of pet"
        error={errors.type}
      >
        Type
      </CustomInput>
    </FormSectionContainer>
  );
};

export default PersonalDetailsSection;
