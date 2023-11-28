export const firstLetterUp = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);
export const transformPath = (path) =>
  path.split('/').slice(0, 2).join('/').toLowerCase();
