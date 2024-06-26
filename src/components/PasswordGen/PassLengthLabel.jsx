// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../styles/passLengthLabel.module.css";

export const PassLengthLabel = ({ length }) => {
  return (
    <div className={styles.container}>
      <span
        className="  font-Orbitron-VariableFont_wght 
                  text-[12px] font-extrabold  text-black xxs:text-[17px] xs:text-[22px]"
        style={{ textShadow: "1px 1px 2px  #fff" }}
      >
        Password length
      </span>
      <span className={styles.result}>{length}</span>
    </div>
  );
};
