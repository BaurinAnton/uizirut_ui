import { GetServerSidePropsContext, PreviewData } from "next";
import { getArticle } from "@api";
import { ArticleTemplate } from "@templates";
import { TArticles } from "@types";
import { ParsedUrlQuery } from "querystring";

type TGetServerSideProps = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => Promise<{ props: { articles: TArticles | null } }>;

type TProps = {
  articles: TArticles;
};

export default function NextArticlePage({ articles }: TProps) {
  return <ArticleTemplate articles={articles.data[0].attributes} />;
}

export const getServerSideProps: TGetServerSideProps = async (context) => {
  const slug = context.query.slug;
  const articles = await getArticle(slug);

  return { props: { articles } };
};
