import { FormLabelProps, RadioGroupProps } from "@mui/material";

export interface MCQSelectionProps {
  questionText?: string;
  formLabelProps?: FormLabelProps;
  radioGroupProps?: RadioGroupProps;
  optionArray: Array<string>;
  selectedAnswer: string;
  handleSelectOption: (selectedOptionIndex: string) => void;
}
