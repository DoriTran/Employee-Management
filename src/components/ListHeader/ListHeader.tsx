"use client";

import { AppButton, InputProfile } from "@/components";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./ListHeader.module.scss";

interface ListHeaderProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const ListHeader: FC<ListHeaderProps> = ({ searchString, setSearchString, onSearch }) => {
  const router = useRouter();

  return (
    <div className={styles.listHeader}>
      <InputProfile
        value={searchString}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchString(event.target.value)}
        label="Search Name"
        type="text"
        width="200px"
        action={() => onSearch()}
        actionString="Search"
        labelClass={styles.label}
        actionProp={{ color: "primary", sx: { width: "50px" } }}
      />
      <AppButton color="success" onClick={() => router.push("/create")}>
        Add Employee
      </AppButton>
    </div>
  );
};

export default ListHeader;
