import React from "react";
import styles from "../Sockets.module.css";

interface Props {
  title: string;

  actions: React.ReactNode;
}

// button visible or not?
// button style
// can we support button with icon?

const ConfirmV2: React.FC<Props> = ({ title, children, actions }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{title}</h4>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>{actions}</div>
    </div>
  );
};

export default ConfirmV2;
