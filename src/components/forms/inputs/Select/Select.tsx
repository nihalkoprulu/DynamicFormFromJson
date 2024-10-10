import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select/Select";
import { FC } from "react";
import {
  SelectContainer,
  SelectLabel,
  SelectMessage,
  SelectStyled,
  SelectPlaceholder,
} from "./styled";

export interface SelectMenuItem {
  name: string;
  value: any;
}

export interface ISelectProps {
  menuItems: SelectMenuItem[];
  label?: string;
  selectID?: string;
  message?: string;
  errorMessage?: string;
  changeHandler?: (event: SelectChangeEvent<unknown>) => void;
  register?: any;
  value?: any;
  name?: any;
  disabled?: boolean;
  background?: string;
  closeHandler?: () => void;
  placeholder?: string;
}

const Select: FC<ISelectProps> = ({
  background,
  menuItems,
  label,
  selectID,
  message,
  errorMessage,
  changeHandler,
  register,
  value,
  disabled,
  closeHandler,
  placeholder,
  name,
}) => {
  const setValidValue: (value: any, name: any) => string = (value, name) => {
    return menuItems.map((item) => item.value).indexOf(value) > -1 ? name : "";
  };

  return (
    <SelectContainer>
      {label && (
        <SelectLabel data-automation-id="select-p-label">{label}</SelectLabel>
      )}

      <SelectStyled
        id={selectID}
        background={background}
        onChange={(e: any) => changeHandler && changeHandler(e)}
        value={setValidValue(value, name)}
        inputProps={register}
        disabled={disabled}
        defaultValue=""
        onClose={closeHandler}
        renderValue={() => {
          if (setValidValue(value, name).length === 0) {
            return <SelectPlaceholder>{placeholder || ""}</SelectPlaceholder>;
          }
          return setValidValue(value, name);
        }}
        displayEmpty={true}
      >
        {menuItems.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </SelectStyled>
      <SelectMessage errorMessage={errorMessage}>
        {message || errorMessage}
      </SelectMessage>
    </SelectContainer>
  );
};

export default Select;
