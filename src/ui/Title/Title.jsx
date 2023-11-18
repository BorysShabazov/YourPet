export const Title = ({ className = '', children }) => {
  return (
    <h2
      className={`text-center text-black text-2xl font-bold manrope md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
};
