"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { Input, Link } from "@nextui-org/react";
import { Button, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "../utils/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../utils/EyeSlashFilledIcon";
import AuthForm from "../utils/AuthForm";

function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [log, setLog] = useState({ email: "", password: "" });

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username: log.email,
      password: log.password,
      redirect: true,
      callbackUrl: "/dashboard",
    };

    // signIn("credentials", data);
    console.log(data);
  }

  return (
    <>
      <AuthForm
        btn={"Login"}
        handleSubmit={handleSubmit}
        inputList={[
          {
            label: "Email",
            placeholder: "johndoe@gmail.com",
            name: "email",
            value: log.email,
            handleChange(e) {
              setLog({ ...log, email: e.target.value });
            },
          },
          {
            label: "Password",
            placeholder: "**********",
            name: "password",
            value: log.password,
            handleChange(e) {
              setLog({ ...log, password: e.target.value });
            },
          },
        ]}
      />
      <div
        className="flex flex-col gap-3 md:flex-row max-w-md w-full justify-between my-4 py-2 m-auto"
      >
        <Link color="foreground" underline="hover" href={"/forgot-password"}>
          Forgot password?
        </Link>
        <Link color="foreground" underline="hover" href={"/signup"}>
          Don&apos;t have an account? Sign up
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
