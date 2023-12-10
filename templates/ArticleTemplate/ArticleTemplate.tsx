import Head from "next/head";
import { Footer, H2, Header } from "@components";
import { Section, Wrapper } from "@layout";
import style from "./ArticleTemplate.module.scss";
import { mdToJsx } from "@utils";
import Link from "next/link";
import { TArticle } from "@types";

type TProps = {
  articles: TArticle;
};

export const ArticleTemplate = ({ articles }: TProps) => {
  return (
    <>
      <Head>
        <title>{articles.title} | Кафедра УиЗИ</title>
      </Head>
      <Header />
      <Wrapper className={style.wrapper}>
        <Section>
          <H2 className={style.title}>{articles.title}</H2>
          <article className={style.article}>
            <div className={style.description}>
              {mdToJsx(articles.description)}
            </div>
          </article>
          <Link className={style.link} href={`/articles`}>
            Ко всем статьям
          </Link>
        </Section>
      </Wrapper>
      <Footer />
    </>
  );
};
