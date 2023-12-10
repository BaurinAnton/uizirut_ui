import Link from "next/link";
import Image from "next/image";
import { H2 } from "@components";
import { Section, Wrapper } from "@layout";
import { TRead } from "@types";
import { getLinkImage } from "@utils";
import style from "./Read.module.scss";
import picture from "@public/images/read/read.jpg";

type TProps = {
  read: TRead;
};

export const Read = ({ read }: TProps) => {
  return (
    <Section className={style.read}>
      <Wrapper>
        <H2>{read.title}</H2>
        <div className={style.readList}>
          {read.Information.map((info) => (
            <Link
              key={`${info.link} ${info.description}`}
              href={info.link}
              className={style.readLink}
            >
              <Image
                src={getLinkImage(info.picture.data.attributes.url)}
                alt={
                  info.picture.data.attributes.alternativeText ||
                  "Ссылка на информацию"
                }
                className={style.readPicture}
                width={360}
                height={300}
              />
              <p className={style.description}>{info.description}</p>
            </Link>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};
