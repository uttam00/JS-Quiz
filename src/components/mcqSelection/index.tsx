import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { MCQSelectionProps } from "./type";

const MCQSelection: FunctionComponent<MCQSelectionProps> = ({
  questionText,
  formLabelProps,
  radioGroupProps,
  optionArray,
  selectedAnswer,
  handleSelectOption,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-question-option-label" {...formLabelProps}>
        {questionText}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-question-option-label"
        name="question-option"
        value={selectedAnswer}
        onChange={(e) =>
          handleSelectOption((e.target as HTMLInputElement).value)
        }
        {...radioGroupProps}
      >
        {optionArray?.map((option, index) => {
          return (
            <FormControlLabel
              key={index + Math.random()}
              value={option}
              control={<Radio />}
              label={option}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default MCQSelection;
