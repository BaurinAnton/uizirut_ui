import Head from "next/head";
import { Footer, H2, Header } from "@components";
import { Section, Wrapper } from "@layout";
import { TContact } from "@types";
import { mdToJsx } from "@utils";
import style from "./ContactsTemplate.module.scss";

type TProps = {
  contact: TContact;
};

export const ContactsTemplate = ({ contact }: TProps) => {
  return (
    <>
      <Head>
        <title>Контакты | Кафедра УиЗИ</title>
      </Head>
      <Header />
      <main>
        <Section className={style.contact}>
          <Wrapper>
            <H2>{contact.title}</H2>
            <div className={style.description}>
              {mdToJsx(contact.description)}
            </div>
          </Wrapper>
        </Section>
      </main>
      <Footer />
    </>
  );
};
