import { Button, Input } from "@nextui-org/react";
import React from "react";

export default function AuthForm({ inputList = [], btn, handleSubmit }) {
  return (
    <form className="flex flex-col gap-4 max-w-md w-full m-auto">
      {inputList.map((input, index) => (
        <div className="w-full">
          <label htmlFor={input.name} className="mb-4">
            {input.label}
          </label>
          <Input
            type={input.type}
            placeholder={input.placeholder}
            isRequired
            size="md"
            radius="sm"
            variant="flat"
            className="w-full placeholder:text-gray-200"
            id={input.name}
            value={input.value}
            onChange={input.handleChange}
          />
        </div>
      ))}
      <Button color="primary" radius="sm" size="md" onClick={handleSubmit}>
        {btn}
      </Button>
    </form>
  );
}
