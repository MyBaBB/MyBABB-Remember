// eslint-disable-next-line no-unused-vars
import React from "react";
// import { TfiNotepad } from "react-icons/tfi";
import styles from "../styles/brand.module.css";
import { PiRewindCircleLight } from "react-icons/pi";
import Notepad from '/notepad.png';
import "./Brand.css";
export const Brand = () => {
  return (
    <header className={styles.header}>
      <div className="relative flex">
        <a href="https://fishy-notepad.mybabb.com/">
          <div className={styles.iconContainer}>
            <img src={Notepad} alt="Notepad" width={192}/>
            <span className="absolute z-10    
             top-[.25rem] left-[1.25rem] text-lime-400 ">
              <PiRewindCircleLight    size={45} />
            </span>
          </div>
        </a>
      </div>
      <div className={styles.brandTitle}>
        <h1 className="yourPersonal font-LibreBaskerville-Bold text-blue-950">
          Your Private
        </h1>
        <bold>Password Generator</bold>
      </div>
    </header>
  );
};
