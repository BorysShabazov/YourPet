export const formatRawDate = (date) => {
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('-');
};
