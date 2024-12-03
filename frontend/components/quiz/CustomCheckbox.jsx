import { Checkbox } from "@nextui-org/react";
export const CustomCheckbox = ({ option, value, isSelected, onSelect }) => {
  const baseStyle =
    "inline-flex max-w-md w-full items-center rounded-lg gap-2 p-4 cursor-pointer";
  const selectedStyle = isSelected
    ? "bg-primary text-primary-foreground border-primary"
    : "bg-content1 text-foreground";

  return (
    <Checkbox
      aria-label={option}
      className={`${baseStyle} ${selectedStyle}`}
      isSelected={isSelected}
      onValueChange={() => onSelect(value)}
    >
      <div className="w-full flex justify-between gap-2">{option}</div>
    </Checkbox>
  );
};
