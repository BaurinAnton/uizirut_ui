/* eslint-disable react/no-children-prop */
import Head from "next/head";
import { Footer, Header } from "@components";
import { useWindowSize } from "@hooks";
import { TConference } from "@types";
import {
  AboutConference,
  CountConference,
  Speakers,
  Programs,
  ApplicationConference,
  Read,
  Venue,
  Organizers,
  HeroConference,
} from "./components";
import style from "./ConferenceTemplate.module.scss";
import { ErrorBoundary } from "@layout/ErrorBoundary";

type TProps = {
  conference: TConference;
};

const fallBackBoundary = (
  <div
    style={{
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Ошибка...
  </div>
);

export const ConferenceTemplate = ({ conference }: TProps) => {
  const toDay = new Date();
  const dateConference = new Date(conference.date);
  const isUpcomingСonference =
    toDay.getTime() - dateConference.getTime() < 0 ? true : false;

  return (
    <>
      <Head>
        <title>{conference.title} | Кафедра УиЗИ</title>
      </Head>
      <Header />
      <ErrorBoundary
        onError={() => {}}
        fallBack={fallBackBoundary}
        children={
          <div className={style.heroConference}>
            <HeroConference
              title={conference.title}
              date={conference.date}
              backgroundPicture={conference.backgroundPicture}
              slug={conference.slug}
            />
            <AboutConference aboutConference={conference.AboutConference} />
            <CountConference countConference={conference.CountConference} />
            <Organizers organizers={conference.Organizers} />
            <Speakers speakers={conference.Speakers} />
            <Programs program={conference.Program} />
            <Read read={conference.Read} />
            {isUpcomingСonference && (
              <ApplicationConference nameConference={conference.title} />
            )}
            <Venue venue={conference.Venue} />
          </div>
        }
      />
      <Footer />
    </>
  );
};
