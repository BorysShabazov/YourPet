import { Container } from '../../ui/Container/Container';

const MainPage = () => {
  return (
    <>
      <Container className="relative flex flex-col items-center overflow-hidden xl:items-center xl:flex-row xl:overflow-visible">
        <h1 className="xl:hidden w-full text-black text-[32px] mt-[64px] font-bold manrope leading-[44px] md:w-[588px] md:text-[68px] md:mt-[88px] md:leading-[100px]">
          Take good care of <br /> your small pets
        </h1>
        <h1 className="hidden xl:block w-[501px] text-black text-[68px] font-extrabold manrope leading-[88.40px] mt-[188px]">
          Take good care of your small pets
        </h1>

        <picture className="z-[-1] min-w-[474px] object-cover object-center md:min-w-[885px] md:-mt-[12%] xl:absolute xl:max-w-[720px] xl:top-[18%] xl:left-[28%]">
          {/* mx-auto my-auto w-[474px] z-[-1] md:min-w-[900px] xl:block
          xl:w-[820px] xl:absolute xl:-top-[12%] xl:left-[28%] */}
          <source
            srcSet="/src/images/mainImg/main.png"
            media="(max-width: 767px)"
          />
          <source
            srcSet="/src/images/mainImg/main@2x.png"
            media="(max-width: 1279px)"
          />
          <source srcSet="/mainImg/main@3x.png" media="(min-width: 1280px)" />
          <img src="/mainImg/main@3x.png" alt="Сute dogs and cat" />
        </picture>
      </Container>
    </>
  );
};

export default MainPage;
