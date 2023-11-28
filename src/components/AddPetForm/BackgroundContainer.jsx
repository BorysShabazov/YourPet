const BackgroundContainer = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] pt-[68px] bg-[url('src/images/mobile_bg.png')] xl:bg-[url('src/images/desktop_bg.png')] md:bg-[url('src/images/tablet_bg.png')] bg-center bg-contain bg-no-repeat">
      {children}
    </div>
  );
};

export default BackgroundContainer;
