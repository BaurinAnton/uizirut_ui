import qs from "qs";
import { TArticles } from "@types";

type TGetArticle = (
  slug: string | string[] | undefined
) => Promise<TArticles | null>;

export const getArticle: TGetArticle = async (
  slug: string | string[] | undefined
) => {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: `${slug}`,
      },
    },
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
