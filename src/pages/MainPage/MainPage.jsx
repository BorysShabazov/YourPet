import { Container } from '../../ui/Container/Container';
import BackgroundContainer from '../../components/AddPetForm/BackgroundContainer';
import mainImages from '../../images/mainImg';

const MainPage = () => {
  return (
    <BackgroundContainer>
      <Container className="relative flex flex-col items-center overflow-hidden xl:items-center xl:flex-row xl:overflow-visible">
        <h1 className="xl:hidden w-full text-black text-[32px] mt-[64px] font-bold manrope leading-[44px] md:w-[588px] md:text-[68px] md:mt-[88px] md:leading-[100px]">
          Take good care of <br /> your small pets
        </h1>
        <h1 className="hidden xl:block w-[501px] text-black text-[68px] font-extrabold manrope leading-[88.40px] mt-[188px]">
          Take good care of your small pets
        </h1>

        <picture className=" min-w-[474px] object-cover object-center md:min-w-[885px] md:-mt-[12%] xl:absolute xl:max-w-[720px] xl:top-[18%] xl:left-[28%]">
          <source srcSet={mainImages.mainImg} media="(max-width: 767px)" />
          <source srcSet={mainImages.mainImg2x} media="(max-width: 1279px)" />
          <source srcSet={mainImages.mainImg3x} media="(min-width: 1280px)" />
          <img src={mainImages.mainImg3x} alt="Сute dogs and cat" />
        </picture>
      </Container>
    </BackgroundContainer>
  );
};

export default MainPage;
