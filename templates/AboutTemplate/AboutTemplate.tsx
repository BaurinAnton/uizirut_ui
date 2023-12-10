import Head from "next/head";
import { Footer, H2, Header } from "@components";
import { Section, Wrapper } from "@layout";
import { TAbout } from "@types";
import { mdToJsx } from "@utils";
import style from "./AboutTemplate.module.scss";

type TProps = {
  about: TAbout;
};

export const AboutTemplate = ({ about }: TProps) => {
  return (
    <>
      <Head>
        <title>О сайте | Кафедра УиЗИ</title>
      </Head>
      <Header />
      <main>
        <Section className={style.contact}>
          <Wrapper>
            <H2>{about.title}</H2>
            <div className={style.description}>
              {mdToJsx(about.description)}
            </div>
          </Wrapper>
        </Section>
      </main>
      <Footer />
    </>
  );
};
