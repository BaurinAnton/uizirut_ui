import qs from "qs";
import { TArticle } from "@types";

type TGetConference = () => Promise<TArticle | null>;

export const getArticles: TGetConference = async () => {
  const query = qs.stringify({
    sort: ["updatedAt:desc"],
    populate: {
      fields: ["title", "description", "subTitle"],
      picture: {
        fields: ["alternativeText, width, height, url"],
      },
    },
  });

  try {
    const res = await fetch(
      `${process.env.ROUTE_STRAPI}/api/articles?${query}`
    );

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);

    return null;
  }
};
