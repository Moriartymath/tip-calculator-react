import { SyntheticEvent } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onHandleClick: (ev: SyntheticEvent) => undefined;
  children: string | React.ReactElement;
};

function Button({ onHandleClick, children }: ButtonProps) {
  return (
    <button onClick={onHandleClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
