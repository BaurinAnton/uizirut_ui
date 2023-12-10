import { TConferences } from "@types";
import qs from "qs";

type TGetConferences = () => Promise<TConferences | null>;

export const getConferences: TGetConferences = async () => {
  const query = qs.stringify({
    sort: ["date:desc"],
    populate: "*",
  });

  try {
    const res = await fetch(
      `${process.env.ROUTE_STRAPI}/api/conferences?${query}`
    );

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
