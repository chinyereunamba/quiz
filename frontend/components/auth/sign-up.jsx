"use client";
import React, { useState, useRef } from "react";
import { Input, Link } from "@nextui-org/react";
import { Button, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "../utils/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../utils/EyeSlashFilledIcon";
import AuthForm from "../utils/AuthForm";

function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    rePassword: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      name: user.name,
      password1: user.password,
      password2: user.password,
    };

    const response = await fetch(`${process.env.NEXTAUTH_BACKEND_URL}/auth/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <AuthForm
        btn={"Register"}
        handleSubmit={handleSubmit}
        inputList={[
          {
            label: "Email",
            placeholder: "johndoe@gmail.com",
            name: "email",
            value: user.email,
            handleChange(e) {
              setUser({ ...user, email: e.target.value });
            },
          },
          {
            label: "Name",
            placeholder: "John Doe",
            name: "name",
            value: user.email,
            handleChange(e) {
              setUser({ ...user, name: e.target.value });
            },
          },
          {
            label: "Password",
            placeholder: "**********",
            name: "password",
            value: user.password,
            handleChange(e) {
              setUser({ ...user, password: e.target.value });
            },
          },
          {
            label: "Re-enter password",
            placeholder: "**********",
            name: "rePassword",
            value: user.rePassword,
            handleChange(e) {
              setUser({ ...user, rePassword: e.target.value });
            },
          },
        ]}
      />
      <div className="flex w-full max-w-md justify-between my-4 py-2 m-auto">

        <Link color="foreground" underline="hover" href={"/login"}>
          Already have an account? Login
        </Link>
      </div>
    </>
  );
}

export default SignUpForm;
