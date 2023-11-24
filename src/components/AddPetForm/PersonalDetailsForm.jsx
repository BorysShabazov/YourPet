import { CustomInput } from './CustomInput';

const PersonalDetailsForm = ({
  errors,
  category,
  title,
  name,
  birth,
  type,
}) => {
  return (
    <div className="flex flex-col mb-[24px] gap-[20px] md:gap-[24px] md:mb-[40px]">
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
            Title of add
          </CustomInput>
          <CustomInput
            name="birth"
            value={birth}
            placeholder="Type date of birth"
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
    </div>
  );
};

export default PersonalDetailsForm;
