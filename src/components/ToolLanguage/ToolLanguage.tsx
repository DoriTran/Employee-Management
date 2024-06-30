"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { getYearsArray } from "@/data/options/year";
import styles from "./ToolLanguage.module.scss";
import InputProfile from "../InputProfile/InputProfile";

import AppInput from "../AppInput/AppInput";
import ImageButton from "../ImageButton/ImageButton";
import ImageUploaded from "../ImageUploaded/ImageUploaded";

interface ToolLanguageProps {
  options: string[];
  removeThis: () => void;
  index: number;
  positionIndex: number;
  value: any;
  setValue: (value: any) => void;
}

const ToolLanguage: FC<ToolLanguageProps> = ({ options, removeThis, index, positionIndex, value, setValue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [images, setImages] = useState<any>([]);
  const timeOptions = useMemo(() => getYearsArray(), []);

  const removeImages = (at: number) => {
    const newImages = [...images];
    newImages.splice(at, 1);
    setImages(newImages);
  };

  console.log(value);

  useEffect(() => {
    const newPositions = [...value.positions];
    if (newPositions[positionIndex].toolLanguages.length > index) {
      newPositions[positionIndex].toolLanguages[index].images = images;
    } else
      newPositions[positionIndex].toolLanguages = [
        ...newPositions[positionIndex].toolLanguages,
        { name: "", from: undefined, to: undefined, description: "", images },
      ];

    setValue({ ...value, positions: newPositions });
  }, [images]);

  return (
    <InputProfile label="Tool/Language" required action={() => removeThis()} actionString="Delete Tool/Language">
      <div className={styles.toolLanguageContainer}>
        <div className={styles.infoNameTime}>
          <AppInput
            value={value.positions?.[positionIndex].toolLanguages?.[index]?.name}
            onChange={(event: any) => {
              const newName = event.target.textContent;

              const newPositions = [...value.positions];
              if (newPositions[positionIndex].toolLanguages.length > index) {
                newPositions[positionIndex].toolLanguages[index].name = newName;
              } else
                newPositions[positionIndex].toolLanguages = [
                  ...newPositions[positionIndex].toolLanguages,
                  { name: newName, from: undefined, to: undefined, description: "", images: [] },
                ];

              setValue({ ...value, positions: newPositions });
            }}
            type="autoComplete"
            options={options}
            placeholder="Select Tool/Language"
            width="calc(100% - 300px)"
          />
          <div className={styles.timeRange}>
            <AppInput
              type="select"
              placeholder="From"
              width="45%"
              options={timeOptions}
              value={value.positions?.[positionIndex].toolLanguages?.[index]?.from}
              onChange={(event: any) => {
                const newFrom = Number.parseInt(event.target.value, 10);

                const newPositions = [...value.positions];
                if (newPositions[positionIndex].toolLanguages.length > index) {
                  newPositions[positionIndex].toolLanguages[index].from = newFrom;
                } else
                  newPositions[positionIndex].toolLanguages = [
                    ...newPositions[positionIndex].toolLanguages,
                    { name: "", from: newFrom, to: undefined, description: "", images: [] },
                  ];

                setValue({ ...value, positions: newPositions });
              }}
            />
            -
            <AppInput
              type="select"
              placeholder="To"
              width="45%"
              options={timeOptions}
              value={value.positions?.[positionIndex].toolLanguages?.[index]?.to}
              onChange={(event: any) => {
                const newTo = Number.parseInt(event.target.value, 10);

                const newPositions = [...value.positions];
                if (newPositions[positionIndex].toolLanguages.length > index) {
                  newPositions[positionIndex].toolLanguages[index].to = newTo;
                } else
                  newPositions[positionIndex].toolLanguages = [
                    ...newPositions[positionIndex].toolLanguages,
                    { name: "", from: undefined, to: newTo, description: "", images: [] },
                  ];

                setValue({ ...value, positions: newPositions });
              }}
            />
          </div>
        </div>
        <InputProfile
          type="area"
          placeholder="Description ..."
          width="100%"
          value={value.positions?.[positionIndex].toolLanguages?.[index]?.description}
          onChange={(event: any) => {
            const newDecription = event.target.value;

            const newPositions = [...value.positions];
            if (newPositions[positionIndex].toolLanguages.length > index) {
              newPositions[positionIndex].toolLanguages[index].description = newDecription;
            } else
              newPositions[positionIndex].toolLanguages = [
                ...newPositions[positionIndex].toolLanguages,
                { name: "", from: undefined, to: undefined, description: newDecription, images: [] },
              ];

            setValue({ ...value, positions: newPositions });
          }}
        />
        <div className={styles.imageList}>
          <ImageButton images={images} setImages={setImages} />
          {images.map((image: any, i: number) => (
            <ImageUploaded key={i} index={i} image={image} onDelete={removeImages} />
          ))}
        </div>
      </div>
    </InputProfile>
  );
};

export default ToolLanguage;
