import { Button } from "@mui/material";
import { FC } from "react";
import styles from "./CreateEditFooter.module.scss";

interface CreateEditFooterProps {
  create?: boolean;
  edit?: boolean;
}

const CreateEditFooter: FC<CreateEditFooterProps> = ({ create = false, edit = false }) => {
  if (!create && !edit) return null;
  return (
    <div className={styles.footer}>
      {edit && (
        <div className={styles.editButtonGroup}>
          <Button onClick={() => console.log("delete")}>Delete</Button>
          <Button onClick={() => console.log("cancel")}>Cancel</Button>
        </div>
      )}
      <Button onClick={() => console.log("save")}>Save</Button>
    </div>
  );
};

export default CreateEditFooter;
