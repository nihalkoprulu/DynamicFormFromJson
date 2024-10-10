import { FC } from "react";
import {
  DynamicFormButtonsContainer,
  DynamicFormViewContainer,
  FieldContainer,
} from "./styled";
import { DynamicFormDataType } from "utils/types/interfaces/DynamicFormDataType";
import TextInput from "components/forms/inputs/TextInput";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { themeColors } from "assets/theme/style";
import Tooltip from "@mui/material/Tooltip";

interface IFormConfiguration {
  updateConfigurationHandler: (value: string, path: string) => void;
  resetEditData: () => void;
  saveConfiguration: () => void;
  deleteField: (path: string) => void;
  data: DynamicFormDataType[];
}

const FormConfiguration: FC<IFormConfiguration> = ({
  updateConfigurationHandler,
  resetEditData,
  saveConfiguration,
  deleteField,
  data,
}) => {
  const renderField: (field: DynamicFormDataType) => JSX.Element = (field) => {
    const { label, path } = field;
    const defaultValue: string = label;

    return (
      <FieldContainer key={`form-conf-${path}`}>
        <TextInput
          label="Field Name"
          defaultValue={defaultValue as string}
          changeHandler={(e) =>
            updateConfigurationHandler(e.target.value, path)
          }
          errorMessage={label === "" ? `${label} is required` : ""}
        />
        <Tooltip title="Delete Field">
          <DeleteForeverIcon
            color="error"
            onClick={() => deleteField(path)}
            sx={{ cursor: "pointer" }}
          />
        </Tooltip>
      </FieldContainer>
    );
  };
  const renderForm: () => JSX.Element[] = () =>
    data.map((field: DynamicFormDataType) => renderField(field));

  return (
    <>
      <DynamicFormViewContainer>{renderForm()}</DynamicFormViewContainer>
      <DynamicFormButtonsContainer>
        <Button
          variant="outlined"
          onClick={() => resetEditData()}
          sx={{
            borderColor: themeColors.primaryButton,
            color: themeColors.primaryButton,
            "&:hover": {
              borderColor: themeColors.primary,
              color: themeColors.primary,
            },
          }}
        >
          Reset
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
          onClick={() => saveConfiguration()}
        >
          Save
        </Button>
      </DynamicFormButtonsContainer>
    </>
  );
};

export default FormConfiguration;
