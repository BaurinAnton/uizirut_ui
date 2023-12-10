import style from "./Section.module.scss";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ children, className }: TProps) => (
  <section className={`${style.section} ${className}`}>{children}</section>
);
