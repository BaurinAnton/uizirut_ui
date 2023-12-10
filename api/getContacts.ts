import { TContact } from "@types";

type TProps = {
  data: {
    attributes: TContact;
  };
};
type TGetContact = () => Promise<TProps | null>;

export const getContacts: TGetContact = async () => {
  try {
    const res = await fetch(`${process.env.ROUTE_STRAPI}/api/contact`);

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
