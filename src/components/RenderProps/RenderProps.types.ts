export type AttachmentItem = {
  id: number;
  title: string;
  size: string;
  thumbnail: string;
  onRemove: (id: number) => void;
};
