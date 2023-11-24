import { ErrorInputMessage } from './ErrorInputMessage';
import { RadioButton } from './RadioButton';

const ChooseOptionSection = ({ category }) => {
  return (
    <div className="relative flex flex-col mb-[45px] gap-[12px] md:mb-[87px]">
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
    </div>
  );
};

export default ChooseOptionSection;
