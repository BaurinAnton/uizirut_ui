import style from "./Wrapper.module.scss";

type TProps = {
  children: React.ReactNode;
  className?: string;
};

export const Wrapper: React.FC<TProps> = ({ children, className }) => (
  <div className={`${style.wrapper} ${className}`}>{children}</div>
);
