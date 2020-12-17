import React from "react";
import styles from "../Sockets.module.css";

interface Props {
  title: string;
  cancelButtonTitle: string;
  onCancel: () => void;
  confirmButtonTitle: string;
  onConfirm: () => void;
  discardButtonTitle: string;
  onDiscard: () => void;
}

// button visible or not?
// button style
// can we support button with icon?
// how many tests we need to cover all use cases?

const ConfirmV1: React.FC<Props> = ({
  title,
  children,
  onCancel,
  onConfirm,
  onDiscard,
  cancelButtonTitle,
  confirmButtonTitle,
  discardButtonTitle,
}) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{title}</h4>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <div>
          <button className={`${styles.neutral} ${styles.button}`} onClick={onCancel}>
            {cancelButtonTitle}
          </button>
        </div>
        <div>
          <button className={`${styles.success} ${styles.button}`} onClick={onDiscard}>
            {discardButtonTitle}
          </button>
          <button className={`${styles.success} ${styles.button}`} onClick={onConfirm}>
            {confirmButtonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmV1;
