const BackgroundWrapper = ({ children, padding }) => {
  return (
    <div
      className={`h-[100vh] ${padding} bg-background bg-[url('src/images/mobile_bg.png')] xl:bg-[url('src/images/desktop_bg.png')] md:bg-[url('src/images/tablet_bg.png')] bg-center bg-cover bg-no-repeat`}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
