"use client";
import React, { useState } from "react";
import { Input, Link } from "@nextui-org/react";
import { Button, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "../utils/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../utils/EyeSlashFilledIcon";

function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <form className="flex gap-6 flex-col w-3/5" autoComplete="none">
        <div className="flex">
          <Input
            type="text"
            label="First name"
            isRequired
            variant="bordered"
            className=" w-full"
          />
        </div>
        <div className="flex">
          <Input
            type="text"
            label="Last name"
            isRequired
            variant="bordered"
            className=" w-full"
          />
        </div>
        <div className="flex">
          <Input
            type="email"
            label="Email"
            isRequired
            variant="bordered"
            className=" w-full"
          />
        </div>
        <div className="flex">
          <Input
            label="Password"
            variant="bordered"
            isRequired
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className=" w-full"
          />
        </div>
        <div className="flex">
          <Input
            label="Re-enter password"
            variant="bordered"
            isRequired
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="w-full"
          />
        </div>
        <div className="flex">
          <Button color="primary" type="submit" radius="sm" className="w-full font-semibold">
            Sign up
          </Button>
        </div>
      </form>

      <div className="flex w-3/5 justify-between my-4 p-2">
        <Link color="foreground" underline="hover" href="/login">
          Already have an account? Login
        </Link>
      </div>
    </>
  );
}

export default SignUpForm;
