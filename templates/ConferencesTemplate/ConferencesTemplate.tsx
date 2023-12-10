import Head from "next/head";
import { CardConference, Footer, H2, Header } from "@components";
import { Section, Wrapper } from "@layout";
import { TConferences } from "@types";
import style from "./ConferencesTemplate.module.scss";

type TProps = {
  conferences: TConferences;
};

export const ConferencesTemplate = ({ conferences }: TProps) => {
  return (
    <>
      <Head>
        <title>Все конференции | Кафедра УиЗИ</title>
      </Head>
      <Header />
      <main>
        <Section>
          <Wrapper className={style.wrapper}>
            <H2>Все конференции</H2>
            <div className={style.upcomingСonferences}>
              {conferences.data.map((conference) => (
                <CardConference
                  key={`${conference.attributes.slug}`}
                  conference={conference.attributes}
                />
              ))}
            </div>
          </Wrapper>
        </Section>
      </main>
      <Footer />
    </>
  );
};
