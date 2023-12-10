import Link from "next/link";
import Image from "next/image";
import { Wrapper } from "@layout";
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
    <section className={style.heroConference}>
      <Wrapper>
        <Image
          src={linkImage || background}
          alt={
            backgroundPicture.data.attributes.alternativeText ||
            "Фоновая картинка"
          }
          layout="fill"
          objectFit="cover"
        />
        <div className={style.wrapper}>
          <div className={style.data}>{normalizeDate}</div>
          <div className={style.description}>{title}</div>
          <Link href={`/conferences/${slug}`} className={style.button}>
            Узнать больше
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};
