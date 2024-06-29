import { FC } from "react";
import { Autocomplete, MenuItem, Select, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

interface AppInputProps {
  type?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  width?: string;
  [key: string]: any;
}

const AppInput: FC<AppInputProps> = ({
  type = "",
  name,
  required = false,
  placeholder = "",
  options = [],
  width,
  ...restProps
}) => {
  return (
    <>
      {type === "text" && (
        <TextField
          sx={{ width: width || "calc(80% - 150px - 150px)" }}
          inputProps={{
            style: {
              padding: "9px 16px",
            },
          }}
          name={name}
          required={required}
          placeholder={placeholder}
          {...restProps}
        />
      )}
      {type === "area" && (
        <Textarea
          name={name}
          minRows={4}
          sx={{ width: width || "calc(80% - 150px - 150px)" }}
          required={required}
          placeholder={placeholder}
        />
      )}
      {type === "select" && (
        <div style={{ width: width || "calc(80% - 150px - 150px)" }}>
          <Select
            name={name}
            required={required}
            style={{ width: "100%" }}
            sx={{
              "& .MuiSelect-select": {
                padding: "9px 16px",
              },
            }}
            MenuProps={{ PaperProps: { style: { maxHeight: "300px" } } }}
            {...restProps}
          >
            {options.map((item: string, index: number) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
      {type === "autoComplete" && (
        <Autocomplete
          freeSolo
          forcePopupIcon
          disablePortal
          options={options}
          sx={{ width: width || "calc(80% - 150px - 150px)" }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              inputProps={{
                ...params.inputProps,
                style: { padding: 0, width: "100%" },
              }}
            />
          )}
          {...restProps}
        />
      )}
    </>
  );
};

export default AppInput;
