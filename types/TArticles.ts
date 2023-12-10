export type TArticles = {
  data: {
    attributes: TArticle;
  }[];
};

export type TArticle = {
  title: string;
  subTitle: string;
  slug: string;
  description: string;
  picture: TPicture;
};

type TPicture = {
  data: {
    attributes: {
      alternativeText: string | null;
      width: number;
      height: number;
      url: string;
    };
  };
};
