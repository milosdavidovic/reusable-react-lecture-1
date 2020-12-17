import React from "react";
import styles from "./Avatar.module.css";

interface Props {
  title: string;
  description: string;

  avatar: {
    src: string;
    alt: string;
  };
  onClick: () => void;
}

const Avatar: React.FC<Props> = ({ title, description, avatar: { src, alt }, onClick }) => {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={src} alt={alt} onClick={onClick} />
      <div className={styles.container}>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Avatar;
