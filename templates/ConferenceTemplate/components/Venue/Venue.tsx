import Image from "next/image";
import { H2 } from "@components";
import { Section, Wrapper } from "@layout";
import { TVenue } from "@types";
import { getLinkImage } from "@utils";
import style from "./Venue.module.scss";

type TProps = {
  venue: TVenue;
};

export const Venue = ({ venue }: TProps) => {
  return (
    <Section className={style.venue}>
      <Wrapper>
        <H2>{venue.title}</H2>
        <div className={style.contacts}>
          {venue.Contact.map((contact) => (
            <div key={contact.contact} className={style.contact}>
              <Image
                src={getLinkImage(contact.picture.data.attributes.url)}
                alt={
                  contact.picture.data.attributes.alternativeText || "Контакт"
                }
                width={75}
                height={75}
              />
              <p className={style.text}>{contact.contact}</p>
            </div>
          ))}
        </div>
        <div className={style.maps}>
          <Image
            src={getLinkImage(venue.mapPicture.data.attributes.url)}
            alt={venue.mapPicture.data.attributes.alternativeText || "Карта"}
            width={1248}
            height={400}
            quality={5}
          />
        </div>
      </Wrapper>
    </Section>
  );
};
