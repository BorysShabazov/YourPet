import { Container } from '../../ui/Container/Container';

const MainPage = () => {
  return (
    <div>
      <Container>
        <h1 className="w-[280px] text-black text-[32px] mt-[44px] font-bold font-['Manrope'] leading-[44px] md:w-[588px] md:text-[68px] md:mt-[88px] md:leading-[100px] xl:w-[501px] xl:text-neutral-900  xl:font-extrabold xl:leading-[88.40px]">
          Take good care of your small pets
        </h1>
      </Container>
      <picture className="relative ">
        <source
          srcset="/src/images/main_img/main.png"
          media="(max-width: 767px)"
          className="min-w-[520px]  mt-8 -ml-24"
        />
        <source
          srcset="/src/images/main_img/main@2x.png"
          media="(min-width: 768px)"
          className="min-w-[900px] -ml-16 -mt-20"
        />
        <source
          srcset="/src/images/main_img/main@3x.png"
          media="(min-width: 1280px)"
          className="absolute w-[680px] -mt-[420px] ml-72"
        />
        <img
          src="/src/images/main_img/main@3x.png"
          alt="Сute dogs and cat"
          className="min-w-[520px]  mt-8 -ml-24 md:min-w-[900px] md:-ml-16 md:-mt-20 xl:absolute xl:w-[680px] xl:-mt-[420px] xl:ml-72"
        />
      </picture>
    </div>
  );
};

export default MainPage;
