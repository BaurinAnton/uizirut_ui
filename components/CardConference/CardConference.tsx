import Image from "next/image";
import Link from "next/link";
import { TConference } from "@types";

import style from "./CardConference.module.scss";
import { getLinkImage, getNormalizeDate } from "@utils";

type TProps = {
  conference: TConference;
};

export const CardConference = ({ conference }: TProps) => (
  <Link className={style.card} href={`/conferences/${conference.slug}`}>
    <Image
      width={360}
      height={300}
      objectFit="cover"
      src={getLinkImage(conference.backgroundPicture.data.attributes.url)}
      alt={
        conference.backgroundPicture.data.attributes.alternativeText ||
        "Картинка статьи"
      }
      className={style.picture}
    />
    <h3 className={style.title}>{conference.title}</h3>
    <div className={style.date}>{getNormalizeDate(conference.date)}</div>
  </Link>
);
