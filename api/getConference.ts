import qs from "qs";
import { TConferences } from "@types";

type TGetConference = (
  slug: string | string[] | undefined
) => Promise<TConferences | null>;

export const getConference: TGetConference = async (
  slug: string | string[] | undefined
) => {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: `${slug}`,
      },
    },
    populate: {
      AboutConference: {
        fields: ["title, description"],
        populate: {
          picture: {
            fields: ["alternativeText, width, height, url"],
          },
        },
      },
      CountConference: {
        populate: "*",
      },
      Organizers: {
        fields: ["title"],
        populate: {
          Partner: {
            fields: ["title"],
            populate: {
              picture: {
                fields: ["alternativeText, width, height, url"],
              },
            },
          },
        },
      },
      Speakers: {
        fields: ["title, description"],
        populate: {
          speaker: {
            fields: ["title, subTitle"],
            populate: {
              picture: {
                fields: ["alternativeText, width, height, url"],
              },
            },
          },
        },
      },
      Program: {
        populate: "*",
      },
      Read: {
        fields: ["title"],
        populate: {
          Information: {
            fields: ["description, link"],
            populate: {
              picture: {
                fields: ["alternativeText, width, height, url"],
              },
            },
          },
        },
      },
      Venue: {
        fields: ["title"],
        populate: {
          Contact: {
            fields: ["contact"],
            populate: {
              picture: {
                fields: ["alternativeText, width, height, url"],
              },
            },
          },
          mapPicture: {
            fields: ["alternativeText, width, height, url"],
          },
        },
      },
      backgroundPicture: {
        fields: ["alternativeText, width, height, url"],
      },
    },
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

    return null;
  }
};
