export type TConferences = {
  data: {
    attributes: TConference;
  }[];
};

export type TConference = {
  title: string;
  slug: string;
  date: string;
  AboutConference: TAboutConference;
  CountConference: TCountConference;
  Organizers: TOrganizers;
  Program: TProgram;
  Read: TRead;
  Speakers: TSpeakers;
  Venue: TVenue;
  backgroundPicture: TPicture;
};

export type THeroConference = {
  title: string;
  slug: string;
  date: string;
  backgroundPicture: TPicture;
};

export type TAboutConference = {
  title: string;
  description: string;
  picture: TPictures;
};

export type TCountConference = {
  title: string;
  description: string;
}[];

export type TOrganizers = {
  title: string;
  Partner: {
    title: string;
    picture: TPicture;
  }[];
};

export type TProgram = {
  title: string;
  description: string;
  ProgramDetails: {
    time: string;
    detail: string;
  }[];
};

export type TRead = {
  title: string;
  Information: {
    link: string;
    description: string;
    picture: TPicture;
  }[];
};

export type TSpeakers = {
  title: string;
  description: string;
  speaker: {
    title: string;
    subTitle: string;
    picture: TPicture;
  }[];
};

export type TVenue = {
  title: string;
  mapPicture: TPicture;
  Contact: {
    contact: string;
    picture: TPicture;
  }[];
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

type TPictures = {
  data: {
    attributes: {
      alternativeText: string | null;
      width: number;
      height: number;
      url: string;
    };
  }[];
};
