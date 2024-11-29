"use client";
import React, { useState, useRef } from "react";
import { Input, Link } from "@nextui-org/react";
import { Button, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "../utils/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../utils/EyeSlashFilledIcon";

function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const lastName = lastNameRef.current.value;
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;

    const data = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      password1: password,
      password2: rePassword,
    };

    const response = await fetch(`${process.env.NEXTAUTH_BACKEND_URL}/auth/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  return (
    <>
      <form
        className="flex gap-6 flex-col w-full max-w-[600px]"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <Input
            type="text"
            label="Name"
            isRequired
            variant="bordered"
            className=" w-full"
            ref={nameRef}
          />
        </div>
        <div className="flex">
          <Input
            type="email"
            label="Email"
            name="email"
            isRequired
            variant="bordered"
            className=" w-full"
            ref={emailRef}
          />
        </div>

        <div className="flex">
          <Input
            label="Password"
            variant="bordered"
            isRequired
            name="password"
            ref={passwordRef}
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
            name="re_password"
            ref={rePasswordRef}
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
          <Button
            color="primary"
            type="submit"
            radius="sm"
            size="lg"
            className="w-full font-semibold"
          >
            Sign up
          </Button>
        </div>
      </form>

      <div className="flex w-full max-w-[600px] justify-between my-4 p-2">
        <Link color="foreground" underline="hover" href={"/login"}>
          Already have an account? Login
        </Link>
      </div>
    </>
  );
}

export default SignUpForm;
