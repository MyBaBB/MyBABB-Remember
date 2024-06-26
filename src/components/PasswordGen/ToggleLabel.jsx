import styles from "../styles/toggleLabel.module.css";

export const ToggleLabel = ({ content, active }) => {
  return (
    <span
      className={`${styles.label} ${active && styles.active}
        font-Orbitron-VariableFont_wght font-extrabold  `}
    >
      {content}
    </span>
  );
};
