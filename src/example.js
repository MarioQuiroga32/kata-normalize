import { config } from './config';

export const Normalize = (str, { lang }) => {
  const { diacritics, articles } = config[lang];
  const articlesRegExp = new RegExp("\\s" + articles.join('\\s|\\s') + "\\s");
  return str
      .normalize("NFD")
      .replace(diacritics, '')
      .replace(articlesRegExp, ' ')
      .toUpperCase()
      .split(' ');
};

