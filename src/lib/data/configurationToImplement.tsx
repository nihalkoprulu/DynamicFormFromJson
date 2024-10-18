import { DynamicFormDataType } from "utils/types/interfaces/DynamicFormDataType";

export const configurationToImplement: DynamicFormDataType[] = [
  {
    type: "textInput",
    label: "Driver Name",
    path: "driver.name",
    defaultValue: "James Blue",
  },
  {
    type: "textInput",
    label: "Vehicle Regplate",
    path: "vehicle.regplate",
    defaultValue: null,
  },
  {
    type: "enumInput",
    label: "Vehicle Type",
    path: "vehicle.type",
    values: ["Car", "Van", "Motorbike"],
    defaultValue: "Car",
  },
  {
    type: "integerInput",
    label: "Driver Age",
    path: "driver.age",
    min: 0,
    max: 130,
    defaultValue: 30,
  },
  {
    type: "currencyInput",
    label: "Vehicle Trade Value",
    path: "vehicle.tradeValue",
    values: ["EUR", "USD", "GBP"],
    defaultValue: "EUR",
  },
];
