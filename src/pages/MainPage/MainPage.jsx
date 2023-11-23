import { Container } from '../../ui/Container/Container';

const MainPage = () => {
  return (
    <div
      className="bg-main-page-mobi h-screen bg-no-repeat bg-cover bg-bottom 
    md:bg-center md:bg-contain md:bg-main-page-tablet 
    xl:bg-top xl:bg-main-page-desctop"
    >
      <Container>
        <h1 className="w-[280px] text-black text-[32px] mt-[44px] font-bold font-['Manrope'] leading-[44px] md:w-[588px] md:text-[68px] md:mt-[88px] md:leading-[100px] xl:w-[501px] xl:text-neutral-900  xl:font-extrabold xl:leading-[88.40px]">
          Take good care of your small pets
        </h1>
      </Container>
    </div>
  );
};

export default MainPage;
