import ToMainPageButton from '../../components/ToMainPageButton/ToMainPageButton';
import { Container } from '../../ui/Container/Container';
import images from '../../images/not_found_page';
import BackgroundContainer from '../../components/AddPetForm/BackgroundContainer';

const NotFoundPage = () => {
  return (
    <BackgroundContainer>
      <Container>
        <div
          className="block w-full text-center text-black text-2xl font-bold font-['Manrope'] mt-[4px]
  md:flex md:place-content-center md:min-w-[768px] md:text-neutral-900 md:text-[32px] md:font-smibold md:leading-[41.60px] xl:w-[1280px] xl:text-[32px] xl:mt-[4px] "
        >
          <span> Ooops!&nbsp;</span>
          <h2>This page not found :&#40;</h2>
        </div>

        <picture>
          <source
            srcSet={images.notFoundPageMobile}
            media="(max-width: 767px)"
          />
          <source
            srcSet={images.notFoundPageTablet}
            media="(max-width: 1279px)"
          />
          <source
            srcSet={images.notFoundPageDesctop}
            media="(min-width: 1280px)"
          />
          <img
            src={images.notFoundPageDesctop}
            alt="Сute dogs and cat"
            className="mt-[88px] min-w-[280px] mx-auto md:mt-[56px] md:min-w-[704px] xl:w-[822px]"
          />
        </picture>
        <ToMainPageButton />
      </Container>
    </BackgroundContainer>
  );
};

export default NotFoundPage;
