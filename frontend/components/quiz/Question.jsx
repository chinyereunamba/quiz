import React from "react";
import { CustomCheckbox } from "./CustomCheckbox";

/** @type {React.FC} */
// If it's a named export
const QuizQuestion = ({
  question,
  options,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">{question}</h3>
      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <CustomCheckbox
            key={index}
            option={`${String.fromCharCode(65 + index)}. ${option}`}
            value={option}
            isSelected={selectedOption === option}
            onSelect={onSelectOption}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
