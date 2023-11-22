const AuthButton = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full p-[10.5px] bg-blue rounded-[40px] justify-center items-center gap-2.5 inline-flex text-white text-xl tracking-wide font-semibold"
    >
      {name}
    </button>
  );
};

export default AuthButton;
