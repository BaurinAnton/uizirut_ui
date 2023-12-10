const year = new Date().getFullYear();

export const LOGO = {
  src: "/images/header/logo.svg",
  alt: "logo",
  title: "Кафедра УиЗИ",
};

export const INFO = {
  title:
    "Институт транспортной техники и систем управления был образован 1 января 2011 года на базе двух ранее существовавших институтов: транспортной техники и организации производства и систем управления, телекоммуникаций и электрификации.",
  copyright: `@2021-${year} Все права защищены`,
  warning:
    "Использование материалов uizirut.ru разрешено только с письменного согласия редакции при наличии активной ссылки на источник. Все права на тексты и изображения принадлежат их авторам",
};

export const MENU = [
  { title: "Все конференции", href: "/conferences" },
  { title: "Статьи", href: "/articles" },
  { title: "Контакты", href: "/contacts" },
  { title: "Информация о сайте", href: "/about" },
];
