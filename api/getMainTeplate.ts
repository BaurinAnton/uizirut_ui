import { TConference } from "@types";
import qs from "qs";

type TGetConference = () => Promise<TConference | null>;

export const getMainTeplate: TGetConference = async () => {
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
