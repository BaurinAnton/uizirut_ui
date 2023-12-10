import style from "./H2.module.scss";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export const H2 = ({ children, className }: TProps) => {
  return <h2 className={`${className} ${style.h2}`}>{children}</h2>;
};
