const AuthWrapper = ({ handleSubmit, children }) => {
  return (
    <form
      noValidate
      autoComplete="off"
      className="w-[100%] max-w-[280px] md:max-w-[608px] mt-5 md:mt-[60px] p-10 pl-3 pr-3 md:p-[75px] md:plp-[60px] md:prp-[60px] bg-white rounded-[20px] shadow"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default AuthWrapper;
