import style from "./H3.module.scss";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export const H3 = ({ children, className }: TProps) => {
  return <h3 className={`${className} ${style.h3}`}>{children}</h3>;
};
