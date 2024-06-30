"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { createEmployee, updateEmployee } from "@/actions";
import styles from "./CreateEditFooter.module.scss";
import AppButton from "../AppButton/AppButton";

interface CreateEditFooterProps {
  create?: boolean;
  edit?: boolean;
  data: any;
}

const CreateEditFooter: FC<CreateEditFooterProps> = ({ create = false, edit = false, data }) => {
  const router = useRouter();

  const onSave = () => {
    if (create) createEmployee(data);
    if (edit) updateEmployee(1, data);
    setTimeout(() => router.push("/list"), 10000);
  };

  if (!create && !edit) return null;
  return (
    <div className={styles.footer}>
      {edit && (
        <div className={styles.editButtonGroup}>
          <AppButton color="error" onClick={() => console.log("delete")}>
            Delete
          </AppButton>
          <AppButton
            sx={{ backgroundColor: "#f9f9fa", color: "black", "&:hover": { backgroundColor: "#D4D4D5" } }}
            onClick={() => router.push("/list")}
          >
            Cancel
          </AppButton>
        </div>
      )}

      <AppButton color="success" onClick={() => onSave()}>
        Save
      </AppButton>
    </div>
  );
};

export default CreateEditFooter;
