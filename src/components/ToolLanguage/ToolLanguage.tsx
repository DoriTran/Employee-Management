"use client";

import { FC, useMemo, useState } from "react";
import { getYearsArray } from "@/data/options/year";
import styles from "./ToolLanguage.module.scss";
import InputProfile from "../InputProfile/InputProfile";

import { tools, languages } from "../../data/options/tool&language";
import AppInput from "../AppInput/AppInput";
import ImageButton from "../ImageButton/ImageButton";
import ImageUploaded from "../ImageUploaded/ImageUploaded";

interface ToolLanguageProps {
  removeThis: () => void;
}

const ToolLanguage: FC<ToolLanguageProps> = ({ removeThis }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [images, setImages] = useState<any>([]);
  const timeOptions = useMemo(() => getYearsArray(), []);

  const removeImages = (at: number) => {
    const newImages = [...images];
    newImages.splice(at, 1);
    setImages(newImages);
  };

  return (
    <InputProfile label="Tool/Language" required action={() => removeThis()} actionString="Delete Tool/Language">
      <div className={styles.toolLanguageContainer}>
        <div className={styles.infoNameTime}>
          <AppInput
            type="autoComplete"
            options={[...tools, ...languages]}
            placeholder="Select Tool/Language"
            width="calc(100% - 300px)"
          />
          <div className={styles.timeRange}>
            <AppInput type="select" placeholder="From" width="45%" options={timeOptions} />
            -
            <AppInput type="select" placeholder="To" width="45%" options={timeOptions} />
          </div>
        </div>
        <InputProfile type="area" placeholder="Description ..." width="100%" />
        <div className={styles.imageList}>
          <ImageButton images={images} setImages={setImages} />
          {images.map((image: any, index: number) => (
            <ImageUploaded key={index} index={index} image={image} onDelete={removeImages} />
          ))}
        </div>
      </div>
    </InputProfile>
  );
};

export default ToolLanguage;
