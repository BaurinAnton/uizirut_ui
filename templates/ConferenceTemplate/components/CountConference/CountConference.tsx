import Image from "next/image";
import { Section, Wrapper } from "@layout";
import { TCountConference } from "@types";

import style from "./CountConference.module.scss";

import background from "@public/images/conference/countConference.jpg";

type TProps = {
  countConference: TCountConference;
};

export const CountConference = ({ countConference }: TProps) => {
  return (
    <Section className={style.countConference}>
      <Image
        src={background}
        alt={""}
        layout="fill"
        objectFit="cover"
        quality={80}
        className={style.backgroundImage}
      />
      <Wrapper>
        <ul className={style.list}>
          {countConference.map((count) => (
            <li key={count.title}>
              <p className={style.title}>{count.title.split(" ").join("\n")}</p>
              <p className={style.subTitle}>{count.description}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  );
};
