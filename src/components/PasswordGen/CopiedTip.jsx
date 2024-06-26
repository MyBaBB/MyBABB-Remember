import { RiShieldCheckFill } from "react-icons/ri";
import styles from "../styles/copiedTip.module.css";

export const CopiedTip = () => {
  return (
    <div className={styles.container}>
      <RiShieldCheckFill size={25} color="green" />
      <span className={styles.tipContainer}>Password copied</span>
      <span className={styles.tipDiamond}></span>
    </div>
  );
};
