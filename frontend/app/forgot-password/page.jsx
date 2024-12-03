"use client";
import { AuthSection } from "@/components/layout/Section";
import Title from "@/components/layout/Title";
import AuthForm from "@/components/auth/AuthForm";
import { year } from "@/constants";
import { Link } from "@nextui-org/react";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <AuthSection>
      <div className="w-full">
        <Title title={"Forgot Password"} />
        <AuthForm
          btn={"Reset Password"}
          inputList={[
            {
              label: "Email",
              placeholder: "johndoe@gmail.com",
              name: "email",
              value: email,
              handleChange(e) {
                setEmail(e.target.value);
              },
            },
          ]}
        />
        <p className="font-normal max-w-md m-auto mt-10 text-center">
          &copy; {year}{" "}
          <Link href="/" className="font-bold" color="foreground">
            QuizApp
          </Link>
          . All rights reserved
        </p>
      </div>
    </AuthSection>
  );
}
