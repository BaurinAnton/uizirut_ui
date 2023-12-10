import Image from "next/image";
import { H2 } from "@components";
import { Section, Wrapper } from "@layout";
import { TOrganizers } from "@types";
import { getLinkImage } from "@utils";
import style from "./Organizers.module.scss";

import pictureRut from "@public/images/organizers/rut.png";

type TProps = {
  organizers: TOrganizers;
};

export const Organizers = ({ organizers }: TProps) => {
  return (
    <Section className={style.organizers}>
      <Wrapper className={style.wrapper}>
        <H2>{organizers.title}</H2>
        <ul className={style.listOrganizers}>
          {organizers.Partner.map((partner, index) => (
            <li
              key={`${partner.title} ${index}`}
              className={style.itemOrganizers}
            >
              <Image
                src={getLinkImage(partner.picture.data.attributes.url)}
                alt={
                  partner.picture.data.attributes.alternativeText || "Партнер"
                }
                width={120}
                height={120}
              />
              <p className={style.descriptionOrganizers}>{partner.title}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  );
};
