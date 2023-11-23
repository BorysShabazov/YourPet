import ToMainPageButton from '../../components/ToMainPageButton/ToMainPageButton';

const NotFoundPage = () => {
  
  return (
    <div
      className={`bg-not-found-page-mobi bg-no-repeat bg-center h-[400px] md:bg-not-found-page-tablet md:h-[600px] xl:bg-not-found-page-desctop  xl:h-[480px]`}
    >
      <div
        className="block w-screen text-center text-black text-2xl font-bold font-['Manrope'] mt-[64px]
		md:flex md:place-content-center md:w-[768px] md:text-neutral-900 md:text-[32px] md:font-smibold md:leading-[41.60px] xl:w-[1280px] xl:text-[32px] xl:mt-[44px] "
      >
        <span> Ooops!</span>
        <h2>This page not found :(</h2>
      </div>
      <ToMainPageButton  />
    </div>
  );
};

export default NotFoundPage;
