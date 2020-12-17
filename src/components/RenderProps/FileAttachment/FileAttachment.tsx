import React from "react";
import { MdClear } from "react-icons/md";
import { AttachmentItem } from "../RenderProps.types";
import styles from "./FileAttachment.module.css";

const FileAttachment: React.FC<AttachmentItem> = ({ id, title, size, thumbnail, onRemove }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} alt={title} src={thumbnail} width={44} height={44} />
      </div>
      <div>
        <div>{title}</div>
        <div>{size}</div>
      </div>
      <button className={styles.button} onClick={() => onRemove(id)}>
        <MdClear size={20} style={{ color: "lightcoral" }} />
      </button>
    </div>
  );
};

export default FileAttachment;
