import Image from "next/image";
import { H2, H3 } from "@components";
import { Section, Wrapper } from "@layout";
import { getLinkImage } from "@utils";
import { TAboutConference } from "@types";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./AboutConference.module.scss";

import { Pagination, Mousewheel, Navigation, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pictureSrc from "@public/images/conference/aboutConference.jpg";
import { useWindowSize } from "@hooks";

type TProps = {
  aboutConference: TAboutConference;
};

export const AboutConference = ({ aboutConference }: TProps) => {
  const width = useWindowSize()?.width;
  const countSlides =
    width && (width < 767 ? 1 : width >= 768 && width < 1280 ? 2 : 3);
  return (
    <Section>
      <Wrapper className={style.aboutConference}>
        <H2 className={style.h2}>{aboutConference.title}</H2>
        <H3 className={style.h3}>{aboutConference.description}</H3>
        <div className={style.pictures}>
          <Swiper
            spaceBetween={50}
            slidesPerView={countSlides || 1}
            navigation={true}
            keyboard={{
              enabled: true,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            mousewheel={true}
            pagination={{
              dynamicBullets: true,
            }}
          >
            {aboutConference.picture.data.map((picture) => (
              <SwiperSlide key={picture.attributes.url}>
                <Image
                  src={getLinkImage(picture.attributes.url) || pictureSrc}
                  alt={picture.attributes.alternativeText || "о конференции"}
                  className={style.picture}
                  width={360}
                  height={300}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </Section>
  );
};
