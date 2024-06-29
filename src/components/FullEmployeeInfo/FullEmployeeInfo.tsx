"use client";

import React, { useState } from "react";
import { AppButton, InputProfile, ToolLanguage } from "@/components";
import { positions } from "@/data/options/position";
import { Divider } from "@mui/material";
import clsx from "clsx";
import styles from "./FullEmployeeInfo.module.scss";

const FullEmployeeInfo = () => {
  // The length indicates the number of Positions
  // Each number represents the number of tool & language for that position
  const [profileLenInfo, setProfileLenInfo] = useState<string[][]>([[""]]);

  // Add new functions
  const addNewPosition = () => setProfileLenInfo([...profileLenInfo, [""]]);
  const addNewToolLanguage = (atPosition: number, toolLanguage: string) => {
    const newProfileLenInfo = [...profileLenInfo];
    newProfileLenInfo[atPosition] = [...newProfileLenInfo[atPosition], toolLanguage];
    setProfileLenInfo(newProfileLenInfo);
  };

  // Remove functions
  const removePosition = (at: number) => {
    const newProfileLenInfo = [...profileLenInfo];
    newProfileLenInfo.splice(at, 1);
    setProfileLenInfo(newProfileLenInfo);
  };
  const removeToolLanguage = (atPosition: number, at: number) => {
    const newProfileLenInfo = [...profileLenInfo];
    newProfileLenInfo[atPosition] = newProfileLenInfo[atPosition].splice(at, 1);
    setProfileLenInfo(newProfileLenInfo);
  };

  return (
    <>
      <InputProfile
        type="text"
        label="Name"
        required
        className={styles.nameInput}
        placeholder="Input your name ..."
      />
      {profileLenInfo.map((allToolLanguage, positionIndex) => (
        <React.Fragment key={positionIndex}>
          <InputProfile
            type="autoComplete"
            options={positions}
            label="Position"
            required
            action={removePosition}
            actionString="Delete position"
            placeholder="Your position ..."
          />
          {allToolLanguage.map((_, index) => (
            <React.Fragment key={index}>
              <ToolLanguage key={index} removeThis={() => removeToolLanguage(positionIndex, index)} />
              {allToolLanguage.length > 1 && index !== allToolLanguage.length - 1 && (
                <Divider className={clsx(styles.divider, styles.dividerDot)} />
              )}
            </React.Fragment>
          ))}
          <AppButton
            variant="outlined"
            onClick={() => addNewToolLanguage(positionIndex, "new tool")}
            sx={{ width: "160px", marginLeft: "160px" }}
          >
            Add Tool/Language
          </AppButton>
          <Divider className={clsx(styles.divider, styles.darker)} />
        </React.Fragment>
      ))}
      <InputProfile
        type="autoComplete"
        options={positions}
        label="Position"
        required
        action={removePosition}
        actionString="Delete position"
        placeholder="Your position ..."
      />
      <AppButton onClick={() => addNewPosition()} sx={{ marginLeft: "160px" }}>
        Add Position
      </AppButton>
    </>
  );
};

export default FullEmployeeInfo;
