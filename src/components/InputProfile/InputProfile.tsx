import { FC } from "react";
import clsx from "clsx";
import styles from "./InputProfile.module.scss";
import AppButton from "../AppButton/AppButton";
import AppInput from "../AppInput/AppInput";

export interface AutocompleteOption {
  label: string;
}

interface ActionProp {
  color?: string;
  [key: string]: any;
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
  className?: string;
  labelClass?: string;
  actionProp?: ActionProp;
  [key: string]: any;
}

const InputProfile: FC<InputProfileProps> = ({
  children,
  label,
  name = label,
  required = false,
  action = () => {},
  actionString = "",
  className,
  labelClass,
  actionProp,
  ...restProps
}) => {
  return (
    <div className={clsx(className, styles.inputProfileContainer)}>
      {label && <div className={clsx(labelClass, styles.label)}>{`${label}${required ? " *" : ""}`}</div>}
      <AppInput name={name} required={required} {...restProps} />
      {children}
      {actionString.length !== 0 && (
        <AppButton
          {...actionProp}
          sx={{
            lineHeight: "normal",
            ...(!actionProp?.color && { backgroundColor: "#6c767d", "&:hover": { backgroundColor: "#333333" } }),
            ...(actionProp?.sx && { ...actionProp?.sx }),
          }}
          onClick={action}
        >
          {actionString}
        </AppButton>
      )}
    </div>
  );
};

export default InputProfile;
