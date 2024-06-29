"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import { CreateEditFooter, InputProfile, ToolLanguage } from "@/components";

const CreatePage = () => {
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
      <InputProfile label="Name" required />
      {profileLenInfo.map((allToolLanguage, positionIndex) => (
        <React.Fragment key={positionIndex}>
          <InputProfile
            label="Position"
            required
            type="select"
            action={removePosition}
            actionString="Delete position"
          />
          {allToolLanguage.map((_, index) => (
            <ToolLanguage key={index} removeThis={() => removeToolLanguage(positionIndex, index)} />
          ))}
          <Button variant="outlined" onClick={() => addNewToolLanguage(positionIndex, "new tool")}>
            Add Tool/Language
          </Button>
        </React.Fragment>
      ))}
      <Button onClick={() => addNewPosition()}>Add Position</Button>
      <CreateEditFooter create />
    </>
  );
};

export default CreatePage;
