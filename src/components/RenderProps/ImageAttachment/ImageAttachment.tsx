import React from "react";
import { MdClear } from "react-icons/md";
import { AttachmentItem } from "../RenderProps.types";
import styles from "./ImageAttachments.module.css";

const ImageAttachment: React.FC<AttachmentItem> = ({ id, title, thumbnail, onRemove }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} alt={title} src={thumbnail} />
      <button className={styles.button} onClick={() => onRemove(id)}>
        <MdClear size={20} style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default ImageAttachment;
