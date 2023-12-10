import Image from "next/image";
import Link from "next/link";
import { TArticle } from "@types";
import style from "./CardArticles.module.scss";
import { getLinkImage } from "@utils";

type TProps = {
  article: TArticle;
};

export const CardArticles: React.FC<TProps> = ({ article }) => (
  <div className={style.article}>
    <div className={style.left}>
      <Image
        width={384}
        height={300}
        src={getLinkImage(article.picture.data.attributes.url)}
        alt={
          article.picture.data.attributes.alternativeText || "Картинка статьи"
        }
        className={style.picture}
      />
    </div>
    <div className={style.right}>
      <h2 className={style.title}>{article.title}</h2>
      <h3 className={style.subTitle}>{article.subTitle}</h3>
      <Link className={style.link} href={`/articles/${article.slug}`}>
        Подробнее
      </Link>
    </div>
  </div>
);
