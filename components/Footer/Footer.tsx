import { Wrapper } from "@layout";
import Image from "next/image";
import Link from "next/link";

import { LOGO, INFO, MENU } from "./constants";

import style from "./Footer.module.scss";

export const Footer = () => (
  <footer className={style.footer}>
    <Wrapper>
      <div className={style.row}>
        <div className={style.left}>
          <div className={style.logo}>
            <Image src={LOGO.src} alt={LOGO.alt} width={60} height={60} />
            <span className={style.title}>{LOGO.title}</span>
          </div>
          <div className={style.info}>
            <p className={style.title}>{INFO.title}</p>
            <p>{INFO.copyright}</p>
          </div>
        </div>
        <div className={style.right}>
          <ul className={style.list}>
            {MENU.map((item) => (
              <li key={item.href} className={style.itemList}>
                <Link href={item.href} className={style.linkList}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.row}>
        <p className={style.warning}>{INFO.warning}</p>
      </div>
    </Wrapper>
  </footer>
);
