import { ErrorInputMessage } from '../CustomFormComponents/ErrorInputMessage';
import { FormSectionContainer } from '../CustomFormComponents/FormSectionContainer';
import { RadioButton } from '../CustomFormComponents/RadioButton';

const ChooseOptionSection = ({ category }) => {
  return (
    <FormSectionContainer sectionName="chooseOption">
      <RadioButton category={category} name="category" value="own">
        your pet
      </RadioButton>
      <RadioButton category={category} name="category" value="sell">
        sell
      </RadioButton>
      <RadioButton category={category} name="category" value="lost">
        lost
      </RadioButton>
      <RadioButton category={category} name="category" value="found">
        found
      </RadioButton>
      <RadioButton category={category} name="category" value="good-hands">
        in good hands
      </RadioButton>
      <ErrorInputMessage inputName={'category'} />
    </FormSectionContainer>
  );
};

export default ChooseOptionSection;
