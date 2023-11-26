export const formatRawDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const mounth = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return [day, mounth, year].join('-');
};
