"use client";

import { FC, ChangeEvent, useRef } from "react";
import styles from "./ImageButton.module.scss";

interface ImageButtonProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const ImageButton: FC<ImageButtonProps> = ({ images, setImages }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setImages([...images, ...files]);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
      <button className={styles.button} onClick={handleButtonClick}>
        <span className={styles.buttonPlus}>+</span>
        <br />
        Upload
      </button>
    </>
  );
};

export default ImageButton;
