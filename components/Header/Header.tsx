import Image from "next/image";
import Link from "next/link";

import { useWindowSize } from "@hooks";

import { Wrapper } from "@layout";
import { Burger } from "./components";

import { LOGO, SOCIAL_NETWORK } from "./constants";

import style from "./Header.module.scss";
import { useState } from "react";
import { Menu } from "./components";

export const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const windowSize = useWindowSize();

  const setIsActiveMenuHandler = () => {
    setIsActiveMenu((isActiveMenu) => !isActiveMenu);
  };
  return (
    <header className={style.header}>
      <Wrapper className={style.wrapper}>
        <div className={style.left}>
          <Burger
            isActiveMenu={isActiveMenu}
            setIsActiveMenuHandler={setIsActiveMenuHandler}
          />
          {windowSize.width && windowSize.width > 768 && (
            <span className={style.nameSite}>Кафедра УиЗИ</span>
          )}
          {isActiveMenu && <Menu />}
        </div>
        <Link className={style.center} href="/">
          <div className={style.logo}>
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              width={LOGO.width}
              height={LOGO.height}
            />
          </div>
        </Link>
        {windowSize.width && windowSize.width > 768 && (
          <div className={style.right}>
            {SOCIAL_NETWORK.map((messenger, id) => (
              <div className={style.messenger} key={`${messenger.alt}_${id}`}>
                <Link href={messenger.href}>
                  <Image
                    src={messenger.src}
                    alt={messenger.alt}
                    width={messenger.width}
                    height={messenger.height}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </Wrapper>
    </header>
  );
};
