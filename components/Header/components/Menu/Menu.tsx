import Link from "next/link";

import { MENU_LIST } from "./constants";

import style from "./Menu.module.scss";

export const Menu = () => (
  <nav className={style.navigation}>
    <ul>
      {MENU_LIST.map((item, id) => (
        <li key={`${item.name}_${id}`} className={style.item}>
          <Link href={item.href} className={style.link}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
