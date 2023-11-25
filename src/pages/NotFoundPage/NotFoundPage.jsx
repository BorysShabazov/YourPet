import ToMainPageButton from '../../components/ToMainPageButton/ToMainPageButton';

const NotFoundPage = () => {
  return (
    <div>
      <div
        className="block w-screen text-center text-black text-2xl font-bold font-['Manrope'] mt-[64px]
		md:flex md:place-content-center md:w-[768px] md:text-neutral-900 md:text-[32px] md:font-smibold md:leading-[41.60px] xl:w-[1280px] xl:text-[32px] xl:mt-[44px] "
      >
        <span> Ooops!</span>
        <h2>This page not found :(</h2>
      </div>

      <picture>
        {/* <source
          srcset="/src/images/not_found_page/not_found_page_mobi.png"
          media="(max-width: 767px)"
          className="object-cover min-w-[280px] object-center"
        />
        <source
          srcset="/src/images/not_found_page/not_found_page_tablet.png"
          media="(min-width: 768px)"
          className="object-cover w-[704px] object-center"
        />
        <source
          srcset="/src/images/not_found_page/not_found_page_desctop.png"
          media="(min-width: 1280px)"
          className="object-cover w-[822px] object-center"
        /> */}
        <img
          src="/src/images/not_found_page/not_found_page_desctop.png"
          alt="Сute dogs and cat"
          className=" mt-11   min-w-[280px] md:min-w-[704px] "
        />
      </picture>
      <ToMainPageButton />
    </div>
  );
};

export default NotFoundPage;
