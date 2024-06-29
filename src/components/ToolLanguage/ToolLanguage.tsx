import { Button } from "@mui/material";
import { FC, useState } from "react";
import Image from "next/image";
import InputProfile from "../InputProfile/InputProfile";
import styles from "./ToolLanguage.module.scss";

interface ToolLanguageProps {
  removeThis: () => void;
}

const ToolLanguage: FC<ToolLanguageProps> = ({ removeThis }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageList, setImageList] = useState<any>([]);

  return (
    <InputProfile label="ToolLanguage" required action={() => removeThis()} actionString="Delete Tool/Language">
      <div className={styles.nametime}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <textarea name="decription" />
      <div className={styles.imageList}>
        <Button onClick={() => console.log("upload")}>
          +<br />
          Upload
        </Button>
        {imageList.map((image: any, index: number) => (
          <Image key={index} src={image} alt={`tool language image ${index}`} />
        ))}
      </div>
    </InputProfile>
  );
};

export default ToolLanguage;
