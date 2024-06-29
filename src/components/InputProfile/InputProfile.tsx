import { FC } from "react";
import clsx from "clsx";
import styles from "./InputProfile.module.scss";
import AppButton from "../AppButton/AppButton";
import AppInput from "../AppInput/AppInput";

export interface AutocompleteOption {
  label: string;
}

interface InputProfileProps {
  children?: React.ReactNode;
  label?: string;
  name?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  options?: string[];
  action?: any;
  actionString?: string;
  width?: string;
  classname?: string;
  [key: string]: any;
}

const InputProfile: FC<InputProfileProps> = ({
  children,
  label,
  name = label,
  required = false,
  action = () => {},
  actionString = "",
  classname,
  ...restProps
}) => {
  return (
    <div className={clsx(classname, styles.inputProfileContainer)}>
      {label && <div className={styles.label}>{`${label}${required && " *"}`}</div>}
      <AppInput name={name} required={required} {...restProps} />
      {children}
      {actionString.length !== 0 && (
        <AppButton
          sx={{ lineHeight: "normal", backgroundColor: "#6c767d", "&:hover": { backgroundColor: "#333333" } }}
          onClick={action}
        >
          {actionString}
        </AppButton>
      )}
    </div>
  );
};

export default InputProfile;
