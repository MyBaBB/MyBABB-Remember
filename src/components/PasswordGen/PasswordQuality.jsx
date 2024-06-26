import React, { useEffect, useRef } from "react";
import styles from "../styles/passwordQuality.module.css";

import { MdSecurity } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";

export const PasswordQuality = ({ length = 0, min = 0, max = 100 }) => {
  const indicatorRef = useRef();

  useEffect(() => {
    const color = length > 18 ? "#76ba99" : length >= 9 ? "#FFC54D" : "#EB5353";
    let quality = Math.round(((length - min) * 220) / (max - min) / 10);
    if (quality === 0) quality = 1;
    for (let i = 0; i < quality; i++) {
      indicatorRef.current.children[i].style.background = color;
    }
    for (let i = quality; i < 10; i++) {
      indicatorRef.current.children[i].style.background = "#ddd";
    }
  }, [length]);

  return (
    <div className={styles.qualityContainer}>
      <span
        className="font-Orbitron-VariableFont_wght text-[12px]
             font-extrabold xxs:text-[15px]  xs:text-[20px] "
      >
        Safety
      </span>
      <div className={styles.qualityBar}>
        <div className={styles.qualityBar} ref={indicatorRef}>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
          <span className={styles.qualityIndicator}></span>
        </div>
        <div className={styles.qualityIcon}>
          {length >= 29 && <MdSecurity fill="#76ba99" size={25} />}

          {length <= 28 && length >= 19 && <FaKey fill="#76ba99" size={20} />}
          {length <= 18 && length >= 9 && (
            <AiFillAlert fill="orange" size={25} className="mt-[-.2rem]" />
          )}
          {length <= 8 && <MdOutlineDoNotDisturb fill="#EB5353" size={25} />}
        </div>
      </div>
    </div>
  );
};
