"use client";

import React, { FC, useEffect, useState } from "react";
import { AppButton, CreateEditFooter, InputProfile, ToolLanguage } from "@/components";
import { Divider } from "@mui/material";
import clsx from "clsx";
import { PositionResourceData } from "@/actions/types";
import { getPositionResources } from "@/actions";
import styles from "./FullEmployeeInfo.module.scss";

const defaultProfile = {
  name: "",
  positions: [
    {
      name: "",
      toolLanguages: [{ name: "", from: undefined, to: undefined, description: "", images: [] }],
    },
    {
      name: "",
      toolLanguages: [],
    },
  ],
};

interface ToolLanguageOptions {
  [key: string]: string[];
}

interface FullEmployeeInfoProp {
  create?: boolean;
  edit?: any;
}

const FullEmployeeInfo: FC<FullEmployeeInfoProp> = ({ create, edit = null }) => {
  // The length indicates the number of Positions
  // Each number represents the number of tool & language for that position
  const [profileInfo, setProfileInfo] = useState<any>(edit || defaultProfile);
  useEffect(() => {
    if (edit) setProfileInfo(edit);
  }, [edit]);

  // Position options
  const [positionOptions, setPositionOptions] = useState<string[]>([]);
  const [toolOptions, setToolOptions] = useState<ToolLanguageOptions>({});
  useEffect(() => {
    const fetchedPositionResources = async () => {
      const resources = await getPositionResources();
      setPositionOptions(resources.map((eachResource: PositionResourceData) => eachResource.name));
      setToolOptions(
        resources.reduce((acc: ToolLanguageOptions, eachResource: PositionResourceData) => {
          acc[eachResource.name as keyof ToolLanguageOptions] = eachResource.toolLanguageResources.map(
            (eachToolLanguage: any) => eachToolLanguage.name,
          );
          return acc;
        }, {}),
      );
    };

    fetchedPositionResources();
  }, []);

  // Add new functions
  const addNewPosition = () => {
    const newPosition = [
      ...profileInfo.positions,
      {
        name: "",
        toolLanguages: [
          {
            name: "",
            from: undefined,
            to: undefined,
            description: "",
            images: [],
          },
        ],
      },
    ];
    setProfileInfo({ ...profileInfo, positions: newPosition });
  };
  const addNewToolLanguage = (atPosition: number) => {
    const newPosition = [...profileInfo.positions];
    newPosition[atPosition].toolLanguages = [
      ...newPosition[atPosition].toolLanguages,
      { name: "", from: 2024, to: 2024, description: "", images: [] },
    ];
    setProfileInfo({ ...profileInfo, positions: newPosition });
  };

  // Remove functions
  const removePosition = (at: number) => {
    const newPosition = [...profileInfo.positions];
    newPosition.splice(at, 1);
    setProfileInfo({ ...profileInfo, positions: newPosition });
  };

  return (
    <>
      <InputProfile
        value={profileInfo.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setProfileInfo({ ...profileInfo, name: event.target.value })
        }
        type="text"
        label="Name"
        required
        className={styles.nameInput}
        placeholder="Input your name ..."
      />
      {profileInfo.positions.map((allToolLanguage: any, positionIndex: number) => (
        <>
          <InputProfile
            value={profileInfo.positions[positionIndex].name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const newPositions = [...profileInfo.positions];
              const newName = event.target.textContent;
              if (profileInfo.positions[positionIndex].name === newName) return;
              newPositions[positionIndex] = {
                name: newName,
                toolLanguages: [
                  {
                    name: "",
                    from: undefined,
                    to: undefined,
                    description: "",
                    images: [],
                  },
                ],
              };
              setProfileInfo({ ...profileInfo, positions: newPositions });
            }}
            type="autoComplete"
            options={positionOptions || []}
            label="Position"
            required
            action={removePosition}
            actionString="Delete position"
            placeholder="Your position ..."
          />
          {allToolLanguage?.toolLanguages.map((_: any, index: number) => (
            <>
              <ToolLanguage
                options={toolOptions[profileInfo.positions[positionIndex].name] || []}
                index={index}
                positionIndex={positionIndex}
                value={profileInfo}
                setValue={setProfileInfo}
                removeThis={() => {
                  const newPositions = [...profileInfo.positions];
                  newPositions[positionIndex].toolLanguages.splice(index, 1);
                  setProfileInfo({ ...profileInfo, positions: newPositions });
                }}
              />
              {allToolLanguage.length > 1 && index !== allToolLanguage.length - 1 && (
                <Divider className={clsx(styles.divider, styles.dividerDot)} />
              )}
            </>
          ))}
          {allToolLanguage?.name !== "" && (
            <AppButton
              variant="outlined"
              onClick={() => addNewToolLanguage(positionIndex)}
              sx={{ width: "160px", marginLeft: "160px" }}
            >
              Add Tool/Language
            </AppButton>
          )}

          <Divider className={clsx(styles.divider, styles.darker)} />
        </>
      ))}
      <AppButton onClick={() => addNewPosition()} sx={{ marginLeft: "160px" }}>
        Add Position
      </AppButton>
      <CreateEditFooter create={create} edit={edit} data={profileInfo} />
    </>
  );
};

export default FullEmployeeInfo;
