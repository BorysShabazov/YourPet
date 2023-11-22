const AuthLabel = ({ htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="sr-only">
      {htmlFor}
    </label>
  );
};

export default AuthLabel;
