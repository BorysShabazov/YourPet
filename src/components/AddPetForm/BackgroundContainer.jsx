const BackgroundContainer = ({ children }) => {
  return (
    <div
      className={`h-full w-full  pt-[68px] pb-[50px] bg-[url('src/images/mobile_bg.png')] xl:bg-[url('src/images/desktop_bg.png')] md:bg-[url('src/images/tablet_bg.png')] bg-center bg-contain bg-no-repeat bg-fixed`}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
