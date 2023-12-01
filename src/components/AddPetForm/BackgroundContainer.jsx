import css from '../../ui/BackgroundWrapper/bg.module.css'

const BackgroundContainer = ({ children }) => {
  return (
    <div
      className={`${css.height} w-full  pt-[68px] pb-[50px] bg-[url('src/images/mobile_bg.png')] xl:bg-[url('src/images/desktop_bg.png')] md:bg-[url('src/images/tablet_bg.png')] bg-center bg-cover bg-no-repeat`}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
