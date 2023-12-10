import Link from "next/link";
import Head from "next/head";
import { Section, Wrapper } from "@layout";
import { TArticles, TConferences } from "@types";
import { Header, Footer, H2, CardConference, CardArticles } from "@components";
import { HeroConference } from "./components";
import style from "./MainTemplate.module.scss";

type TProps = {
  conferences: TConferences;
  articles: TArticles;
};

export const MainTemplate = ({ conferences, articles }: TProps) => {
  const maxShowCards = 3;

  return (
    <>
      <Head>
        <title>Кафедра УиЗИ</title>
      </Head>
      <Header />
      <main>
        <Section className={style.mainTemplate}>
          <div className={style.heroConference}>
            <HeroConference
              title={conferences.data[0].attributes.title}
              slug={conferences.data[0].attributes.slug}
              date={conferences.data[0].attributes.date}
              backgroundPicture={
                conferences.data[0].attributes.backgroundPicture
              }
            />
          </div>
        </Section>
        <Wrapper>
          <Section>
            <H2 className={style.title}>Конференции</H2>
            <div className={style.upcomingСonferences}>
              {conferences.data.map((conference, index) => {
                if (index < maxShowCards)
                  return (
                    <CardConference
                      key={`${conference.attributes.slug}`}
                      conference={conference.attributes}
                    />
                  );
              })}
            </div>
            <div className={style.otherConference}>
              <Link className={style.otherConferenceLink} href={"/conferences"}>
                Посмотреть все конференции {">"}{" "}
              </Link>
            </div>
          </Section>
          <Section>
            <H2>Статьи</H2>
            <div className={style.articles}>
              {articles.data.map((article, index) => {
                if (index < 2) {
                  return (
                    <div
                      className={style.article}
                      key={article.attributes.slug}
                    >
                      <CardArticles article={article.attributes} />
                    </div>
                  );
                }
              })}
            </div>
            <div className={style.otherConference}>
              <Link className={style.otherConferenceLink} href={"/articles"}>
                Посмотреть все cтатьи {">"}{" "}
              </Link>
            </div>
          </Section>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
};
