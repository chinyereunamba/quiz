"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { Input, Link } from "@nextui-org/react";
import { Button, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "../utils/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../utils/EyeSlashFilledIcon";

function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = {
      username: email,
      password: password,
      redirect: true,
      callbackUrl: "/dashboard",
    };

    signIn("credentials", data);
  }

  return (
    <>
      <form
        className="flex gap-6 flex-col max-w-[600px] w-full justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex ">
          <Input
            type="email"
            label="Email"
            name="email"
            isRequired
            variant="bordered"
            className="w-full"
            ref={emailRef}
          />
        </div>
        <div className="flex">
          <Input
            label="Password"
            variant="bordered"
            name="password"
            isRequired
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
        <div>
          <Checkbox color="default" radius="sm">
            Remember me
          </Checkbox>
        </div>
        <div className="flex">
          <Button
            color="primary"
            type="submit"
            radius="sm"
            size="lg"
            className="font-semibold w-full"
          >
            Login
          </Button>
        </div>
        <div>
          <Button onClick={()=>signIn('google')}>Login with Google</Button>
        </div>
      </form>

      <div
        className="flex flex-col gap-3 md:flex-row max-w-[600px] w-full justify-between my-4 p-2"
        color="foreground"
      >
        <Link color="foreground" underline="hover" href={"/forgot-password"}>
          Forgot password?
        </Link>
        <Link color="foreground" underline="hover" href={"/sign-up"}>
          Don&apos;t have an account? Sign up
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
