import React, { useState } from "react";
import { AttachmentItem } from "../RenderProps.types";
import { ATTACHMENTS_DATA } from "./AttachmentsList.data";

interface Props<T extends Record<string, unknown> = {}> {
  ListItemComponent: React.ComponentType<T>;
}

const AttachmentsList: React.FC<Props<AttachmentItem>> = ({ ListItemComponent }) => {
  const [attachments, setAttachments] = useState(ATTACHMENTS_DATA);

  // some code to fetch attachments...

  const removeItem = (id: number) => {
    setAttachments((state) => {
      return state.filter((a) => a.id !== id);
    });
  };

  return (
    <>
      {attachments.map(({ id, name, thumbnailSrc, size }) => {
        return (
          <ListItemComponent key={id} id={id} title={name} thumbnail={thumbnailSrc} size={size} onRemove={removeItem} />
        );
      })}
    </>
  );
};

export default AttachmentsList;
