import { ChangeEvent, MouseEvent, FocusEvent, FC, KeyboardEvent } from "react";
import {
  TextInputContainer,
  TextInputLabel,
  TextInputMessage,
  TextInputStyled,
} from "./styled";

export interface TextInputProps {
  defaultValue?: string;
  message?: string;
  errorMessage?: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  blurHandler?: (event: FocusEvent<HTMLInputElement>) => void;
  handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  register?: any;
  label?: string;
  type?: "number" | "password" | "text";
  placeholder?: string;
  multiline?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  endIcon?: any;
  customProps?: any;
}

const TextInput: FC<TextInputProps> = ({
  defaultValue,
  message,
  errorMessage,
  register,
  label,
  type,
  placeholder,
  disabled,
  changeHandler,
  handleKeyDown,
  onClick,
  endIcon,
  multiline,
  customProps,
  blurHandler,
}) => (
  <TextInputContainer>
    {label && <TextInputLabel>{label}</TextInputLabel>}

    <TextInputStyled
      placeholder={placeholder || ""}
      value={defaultValue}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onChange={changeHandler}
      inputProps={register}
      InputProps={endIcon || customProps}
      multiline={multiline}
      onKeyDown={handleKeyDown}
      onBlur={blurHandler}
    />

    {(message || errorMessage) && (
      <TextInputMessage errorMessage={errorMessage || ""}>
        {message || errorMessage}
      </TextInputMessage>
    )}
  </TextInputContainer>
);

export default TextInput;
