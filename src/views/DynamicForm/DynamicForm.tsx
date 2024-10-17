import { FC, useEffect, useState } from "react";
import {
  DynamicFormOutput,
  DynamicFormOutputContainer,
  DynamicFormOutputTitle,
  DynamicFormViewTitle,
  DynamicFormViewWrapper,
} from "./styled";
import { DynamicFormDataType } from "utils/types/interfaces/DynamicFormDataType";
import { configurationToImplement } from "lib/data/configurationToImplement";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UpdateForm from "./UpdateForm";
import FormConfiguration from "./FormConfiguration";
import { themeColors } from "assets/theme/style";

const DynamicForm: FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [initialData, setInitialData] = useState<DynamicFormDataType[]>([]);
  const [formData, setFormData] = useState<DynamicFormDataType[]>([]);
  const [showOutput, setShowOutput] = useState<boolean>(false);

  const handleChange: (event: any, newValue: any) => void = (
    event,
    newValue
  ) => {
    setTabValue(newValue);
    setShowOutput(false);
  };

  useEffect(() => {
    setInitialData(configurationToImplement);
    setFormData(configurationToImplement);

    // Initialize initialData and formData state with configurationToImplement
  }, []);

  const saveForm: () => void = () => {
    setShowOutput(!showOutput);
  };

  const saveConfiguration: () => void = () => {
    // Map through formData to create a new array with updated paths

    const data: DynamicFormDataType[] = formData.map((field) => ({
      ...field,
      path: formatFieldPath(field.label), // Update the path using formatFieldPath
    }));
    setInitialData(data);
    setShowOutput(true);
  };

  const cancelForm: () => void = () => {
    setInitialData(configurationToImplement);
    setFormData(configurationToImplement);
    setShowOutput(false);
  };

  const resetEditData: () => void = () => {
    setFormData(configurationToImplement);
  };

  const updateHandler: (value: string | number, path: string) => void = (value, path) => {
    if (!path) {
      console.warn("Invalid input: path shouldn't be empty.");
      return;
    }

    const updatedData: DynamicFormDataType[] = initialData.map((data) => {
      if (data.path === path) {
        return {
          ...data,
          defaultValue: value,
        };
      }
      return data;
    });

    setInitialData(updatedData);
  };

  const deleteField: (path: string) => void = (path) => {
    setFormData((prevFormData) => {
      const updatedData: DynamicFormDataType[] = prevFormData.filter(
        (data) => data.path !== path
      );
      return updatedData;
    });
  };

  const formatFieldPath: (fieldName: string) => string = (fieldName) => {
    return fieldName
      .trim() // Trim leading and trailing spaces
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, ".") // Replace spaces with dots
      .replace(/[^a-z0-9.]/g, "") // Remove any non-alphanumeric characters except dots
      .replace(/\.{2,}/g, ".") // Replace multiple dots with a single dot
      .replace(/^\.+|\.+$/g, ""); // Remove leading and trailing dots
  };

  const updateConfigurationHandler: (value: string, path: string) => void = (
    value,
    path
  ) => {
    if (!path) {
      console.warn("Invalid input: path shouldn't be empty.");
      return;
    }

    const updatedData: DynamicFormDataType[] = formData.map((data) => {
      if (data.path === path) {
        return {
          ...data,
          label: value,
        };
      }
      return data;
    });

    setFormData(updatedData);
  };

  return (
    <DynamicFormViewWrapper>
      <DynamicFormViewTitle>Insurance Claim Request</DynamicFormViewTitle>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: themeColors.primary,
          },
        }}
      >
        <Tab
          value={0}
          label="Update Form"
          sx={{
            color: themeColors.primaryButton,
            "&:hover": {
              color: themeColors.primaryButton,
            },
            "&.Mui-selected": {
              color: themeColors.primary,
            },
          }}
        />
        <Tab
          value={1}
          label="Form Configuration"
          sx={{
            color: themeColors.primaryButton,
            "&:hover": {
              color: themeColors.primaryButton,
            },
            "&.Mui-selected": {
              color: themeColors.primary,
            },
          }}
        />
      </Tabs>
      {tabValue === 0 && (
        <UpdateForm
          updateHandler={updateHandler}
          cancelForm={cancelForm}
          saveForm={saveForm}
          data={initialData}
        />
      )}
      {tabValue === 1 && (
        <FormConfiguration
          updateConfigurationHandler={updateConfigurationHandler}
          resetEditData={resetEditData}
          saveConfiguration={saveConfiguration}
          deleteField={deleteField}
          data={formData}
        />
      )}
      {showOutput && (
        <DynamicFormOutputContainer>
          <DynamicFormOutputTitle>OUTPUT</DynamicFormOutputTitle>
          <DynamicFormOutput>
            <pre>{JSON.stringify(initialData, null, 2)}</pre>
          </DynamicFormOutput>
        </DynamicFormOutputContainer>
      )}
    </DynamicFormViewWrapper>
  );
};

export default DynamicForm;
