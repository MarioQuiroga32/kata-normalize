export const Normalize = (str, { lang }) => {
  return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .split(' ');
};
