const ButtonContact = ({ data }) => {
  return (
    <a
      href={`tel:${data.phone}`}
      type="button"
      className=" hover:blue-gradient hover:text-white text-blue text-base font-bold font-['Manrope'] tracking-wide smOnly:w-auto smOnly:h-10 md:w-32 md:h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex"
    >
      Contact
    </a>
  );
};
export default ButtonContact;
