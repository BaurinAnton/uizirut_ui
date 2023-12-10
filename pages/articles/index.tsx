import { getArticles } from "@api";
import { TArticles } from "@types";
import { ArticlesTemplate } from "@templates";

type TProps = {
  articles: TArticles;
};

export default function NextArticlesPage({ articles }: TProps) {
  return <ArticlesTemplate articles={articles} />;
}

export async function getServerSideProps() {
  const articles = await getArticles();

  return { props: { articles } };
}
