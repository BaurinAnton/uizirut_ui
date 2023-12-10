import { TAbout } from "@types";

type TProps = {
  data: {
    attributes: TAbout;
  };
};
type TGetAbout = () => Promise<TProps | null>;

export const getAbout: TGetAbout = async () => {
  try {
    const res = await fetch(`${process.env.ROUTE_STRAPI}/api/about`);

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
