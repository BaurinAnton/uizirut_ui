export const getNormalizeDate = (date: string) => {
  const dateObject = new Date(date);
  const month =
    "января, февраля, марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря".split(
      ","
    );
  const normalizeDate = `${dateObject.getDate()} ${
    month[dateObject.getMonth()]
  } ${dateObject.getFullYear()}`;

  return normalizeDate;
};
