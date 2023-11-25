export const formatRawDate = (date) => {
  return [date.getDay(), date.getMonth() + 1, date.getFullYear()].join('-');
};
