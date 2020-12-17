import React, { useState } from "react";
import { useMeasure } from "react-use";
import styles from "./ShowMore.module.css";

const MAX_HEIGHT = 80;

const ShowMore: React.FC = ({ children }) => {
  const [contentRef, { height: contentHeight }] = useMeasure<HTMLDivElement>();
  const [showAll, setShowAll] = useState(false);

  const buttonText = showAll ? "Show less" : "Show more";
  const limitedHeight = showAll ? contentHeight + 16 : MAX_HEIGHT;

  return (
    <div className={styles.container}>
      <div style={{ height: limitedHeight }} className={styles.contentWrapper}>
        <div ref={contentRef}>{children}</div>
      </div>
      {contentHeight > MAX_HEIGHT && (
        <button className={styles.button} onClick={() => setShowAll((s) => !s)}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
