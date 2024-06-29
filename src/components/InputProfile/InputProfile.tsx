import { FC } from "react";
import { Button } from "@mui/material";
import styles from "./InputProfile.module.scss";

interface InputProfileProps {
  children?: React.ReactNode;
  label: string;
  name?: string;
  required?: boolean;
  type?: string;
  action?: any;
  actionString?: string;
}

const InputProfile: FC<InputProfileProps> = ({
  children,
  label,
  name = label,
  required = false,
  type = "text",
  action = () => {},
  actionString = "",
}) => {
  return (
    <div className={styles.inputProfileContainer}>
      <div className={styles.label}>{`${label}${required && " *"}`}</div>
      <input type={type} required name={name} />
      {children}
      <Button variant="contained" onClick={action}>
        {actionString}
      </Button>
    </div>
  );
};

export default InputProfile;
