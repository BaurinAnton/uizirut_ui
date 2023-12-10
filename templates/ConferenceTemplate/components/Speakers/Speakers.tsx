import Image from "next/image";
import { H2, H3 } from "@components";
import { TSpeakers } from "@types";
import { getLinkImage } from "@utils";
import { Wrapper } from "@layout";
import style from "./Speakers.module.scss";

type TProps = {
  speakers: TSpeakers;
};

export const Speakers = ({ speakers }: TProps) => {
  return (
    <section className={style.speakers}>
      <Wrapper className={style.wrapper}>
        <H2 className={style.h2}>{speakers.title}</H2>
        <H3 className={style.h3}>{speakers.description}</H3>
        <ul className={style.listSpeakers}>
          {speakers.speaker.map((speaker, index) => (
            <li key={`${speaker.title} ${index}`} className={style.itemSpeaker}>
              <Image
                src={getLinkImage(speaker.picture.data.attributes.url)}
                alt={
                  speaker.picture.data.attributes.alternativeText || "Спикер"
                }
                width={300}
                height={300}
                className={style.pictureSpeaker}
              />
              <p className={style.titleSpeaker}>{speaker.title}</p>
              <p className={style.subTitleSpeaker}>{speaker.subTitle}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};
