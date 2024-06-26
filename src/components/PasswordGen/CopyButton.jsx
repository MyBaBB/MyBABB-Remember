import { CgCopy } from "react-icons/cg";
import styles from "../styles/copyButton.module.css";

export const CopyButton = ({ handleClick, disabled }) => {
  return (
    <button
      className={`${styles.copyButton} ${disabled && styles.disabled}`}
      onClick={handleClick}
    >
      <CgCopy size={25} color="navy" />
    </button>
  );
};
