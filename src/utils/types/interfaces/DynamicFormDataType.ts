export interface DynamicFormDataType {
  type: string;
  label: string;
  path: string;
  defaultValue: string | number | null | undefined;
  values?: string[];
  min?: number;
  max?: number;
}


