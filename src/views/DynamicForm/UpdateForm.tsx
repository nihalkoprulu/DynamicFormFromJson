import { FC } from "react";
import {
  DynamicFormButtonsContainer,
  DynamicFormViewContainer,
} from "./styled";
import { DynamicFormDataType } from "utils/types/interfaces/DynamicFormDataType";
import TextInput from "components/forms/inputs/TextInput";
import Button from "@mui/material/Button";
import Select from "components/forms/inputs/Select";
import { themeColors } from "assets/theme/style";

interface IUpdateForm {
  updateHandler: (value: string | number, path: string) => void;
  cancelForm: () => void;
  saveForm: () => void;
  data: DynamicFormDataType[];
}

const UpdateForm: FC<IUpdateForm> = ({
  updateHandler,
  cancelForm,
  saveForm,
  data,
}) => {
  const mappedField: (data: string[]) => any[] = (data) =>
    data.map((d: string) => ({
      name: d,
      value: d,
    }));

  const renderField: (field: DynamicFormDataType) => JSX.Element = (field) => {
    const { type, label, path, defaultValue, values, min, max } = field;
    switch (type) {
      case "integerInput":
        return (
          <TextInput
            key={`form-${path}`}
            type="number"
            label={label || ""}
            defaultValue={defaultValue as string}
            changeHandler={(e) => updateHandler(e.target.value, path)}
            errorMessage={defaultValue === "" ? `${label} is required` : ""}
          />
        );
      case "enumInput":
        return (
          <Select
            key={`form-${path}`}
            label={label}
            menuItems={values ? mappedField(values) : [{ value: "", name: "" }]}
            name={defaultValue}
            value={defaultValue}
            changeHandler={(event: any) =>
              updateHandler(event.target.value, path)
            }
          />
        );

      case "currencyInput":
        return (
          <Select
            key={`form-${path}`}
            label={label}
            menuItems={values ? mappedField(values) : [{ value: "", name: "" }]}
            name={defaultValue}
            value={defaultValue}
            changeHandler={(event: any) =>
              updateHandler(event.target.value, path)
            }
          />
        );

      default:
        return (
          <TextInput
            key={`form-${path}`}
            label={label || ""}
            defaultValue={defaultValue as string}
            changeHandler={(e) => updateHandler(e.target.value, path)}
            errorMessage={defaultValue === "" ? `${label} is required` : ""}
          />
        );
    }
  };

  const renderForm: () => JSX.Element[] = () =>
    data.map((field: DynamicFormDataType) => renderField(field));

  return (
    <>
      <DynamicFormViewContainer>{renderForm()}</DynamicFormViewContainer>
      <DynamicFormButtonsContainer>
        <Button
          variant="outlined"
          sx={{
            borderColor: themeColors.primaryButton,
            color: themeColors.primaryButton,
            "&:hover": {
              borderColor: themeColors.primary,
              color: themeColors.primary,
            },
          }}
          onClick={() => cancelForm()}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: themeColors.primaryButton,
            color: "white",
            "&:hover": {
              backgroundColor: themeColors.primary,
            },
          }}
          onClick={() => saveForm()}
        >
          Save
        </Button>
      </DynamicFormButtonsContainer>
    </>
  );
};

export default UpdateForm;
