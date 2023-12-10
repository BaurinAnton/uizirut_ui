import { getConferences } from "@api";
import { TConferences } from "@types";
import { ConferencesTemplate } from "@templates";

type TProps = {
  conferences: TConferences;
};

export default function NextConferencesPage({ conferences }: TProps) {
  return <ConferencesTemplate conferences={conferences} />;
}

export async function getServerSideProps() {
  const conferences = await getConferences();

  return { props: { conferences } };
}
