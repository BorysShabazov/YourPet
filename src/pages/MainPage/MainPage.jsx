import { Container } from '../../ui/Container/Container';

const MainPage = () => {
  return (
    <>
      <Container className="relative flex flex-col xl:items-center xl:flex-row overflow:visible">
        <h1 className="xl:hidden w-full text-black text-[32px] mt-[64px] font-bold manrope leading-[44px] md:w-[588px] md:text-[68px] md:mt-[88px] md:leading-[100px]">
          Take good care of <br /> your small pets
        </h1>
        <h1 className="hidden xl:block w-[501px] text-black text-[68px] font-extrabold manrope leading-[88.40px] mt-[188px]">
          Take good care of your small pets
        </h1>
        <picture className="hidden xl:block xl:mt-0 xl:absolute xl:-top-[22%] xl:left-[14%] z-[-1] ">
          <source
            srcset="/src/images/main_img/main@3x.png"
            media="(min-width: 1280px)"
          />
          <img src="/src/images/main_img/main@3x.png" alt="Сute dogs and cat" />
        </picture>
      </Container>
      <picture className="mx-auto overflow-hidden xl:hidden z-[-1]">
        <source
          srcset="/src/images/main_img/main.png"
          media="(max-width: 767px)"
        />
        <source
          srcset="/src/images/main_img/main@2x.png"
          media="(max-width: 1279px)"
        />
        <img
          className="min-w-[520px] mt-[10%] -ml-24 md:min-w-[900px] md:mt-[-10%]"
          src="/src/images/main_img/main@3x.png"
          alt="Сute dogs and cat"
        />
      </picture>
    </>
  );
};

export default MainPage;
