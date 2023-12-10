import { MainTemplate } from "@templates";
import { getArticles, getMainTeplate } from "@api";
import { TArticles, TConferences } from "@types";

type TProps = {
  conferences: TConferences;
  articles: TArticles;
};

export default function NextHomePage({ conferences, articles }: TProps) {
  return <MainTemplate conferences={conferences} articles={articles} />;
}

export async function getServerSideProps() {
  const conferences = await getMainTeplate();
  const articles = await getArticles();

  return { props: { conferences, articles } };
}
