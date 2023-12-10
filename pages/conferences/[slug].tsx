import { GetServerSidePropsContext, PreviewData } from "next";
import { getConference } from "@api";
import { ConferenceTemplate } from "@templates";
import { TConferences } from "@types";
import { ParsedUrlQuery } from "querystring";

type TGetServerSideProps = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => Promise<{ props: { conference: TConferences | null } }>;

type TProps = {
  conference: TConferences;
};

export default function NextConferencePage({ conference }: TProps) {
  return <ConferenceTemplate conference={conference.data[0].attributes} />;
}

export const getServerSideProps: TGetServerSideProps = async (context) => {
  const slug = context.query.slug;
  const conference = await getConference(slug);

  return { props: { conference } };
};
