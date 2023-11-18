export const CategoryButton = ({ children }) => {
  return (
    <button class="px-4 py-2 bg-lightBlue rounded-[40px] active:bg-blue">
      <p class="text-blue text-sm font-medium manrope active:text-background">
        {children}
      </p>
    </button>
  );
};

export const CategoryButtonActive = ({ children }) => {
  return (
    <button class="px-4 py-2 rounded-[40px] bg-blue">
      <p class=" text-sm font-medium manrope text-background">{children}</p>
    </button>
  );
};
