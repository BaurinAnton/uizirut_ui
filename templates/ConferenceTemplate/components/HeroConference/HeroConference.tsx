import Link from "next/link";
import Image from "next/image";
import { Section, Wrapper } from "@layout";
import { THeroConference } from "@types";
import { getLinkImage, getNormalizeDate } from "@utils";
import style from "./HeroConference.module.scss";

import background from "@public/images/rootConference/image.jpg";

export const HeroConference = ({
  title,
  date,
  slug,
  backgroundPicture,
}: THeroConference) => {
  const normalizeDate = getNormalizeDate(date);
  const linkImage = getLinkImage(backgroundPicture.data.attributes.url);

  return (
    <Section className={style.heroConference}>
      <Image
        src={linkImage || background}
        alt={
          backgroundPicture.data.attributes.alternativeText ||
          "Фоновая картинка"
        }
        layout="fill"
        objectFit="cover"
        quality={80}
      />
      <Wrapper className={style.wrapper}>
        <div className={style.data}>{normalizeDate}</div>
        <div className={style.description}>{title}</div>
      </Wrapper>
    </Section>
  );
};
