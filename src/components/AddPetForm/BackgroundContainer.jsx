import css from './background.module.css'

const BackgroundContainer = ({ children }) => {
  return (
    <div className={`${css.heightBackground} w-[100vw]  pt-[68px] bg-[url('src/images/mobile_bg.png')] xl:bg-[url('src/images/desktop_bg.png')] md:bg-[url('src/images/tablet_bg.png')] bg-center bg-contain bg-no-repeat overflow-hidden`}>
      {children}
    </div>
  );
};

export default BackgroundContainer;
