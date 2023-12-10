import style from "./Burger.module.scss";

type TProps = {
  isActiveMenu: boolean;
  setIsActiveMenuHandler: () => void;
};
export const Burger: React.FC<TProps> = ({
  isActiveMenu,
  setIsActiveMenuHandler,
}) => {
  return (
    <button
      className={`${style.burger} ${isActiveMenu && style.burgerActive}`}
      onClick={setIsActiveMenuHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
