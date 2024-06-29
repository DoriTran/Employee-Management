import Image from "next/image";
import { FC } from "react";
import styles from "./ImageUploaded.module.scss";

interface ImageUploadedProps {
  index: number;
  image: File;
  onDelete: (at: number) => void;
}

const ImageUploaded: FC<ImageUploadedProps> = ({ index, image, onDelete }) => {
  return (
    <div className={styles.imageUploadedContainer}>
      <Image
        src={URL.createObjectURL(image)}
        layout="fill"
        objectFit="cover"
        loading="lazy"
        alt={`tool language image ${index}`}
        className={styles.roundedImage}
      />
      <button className={styles.removeButton} onClick={() => onDelete(index)}>
        ✖
      </button>
    </div>
  );
};

export default ImageUploaded;
