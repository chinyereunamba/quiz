import React from "react";
import Title from "@/components/layout/Title";
import { Link } from "@nextui-org/react";
import SignUpForm from "@/components/auth/sign-up";

function page() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <Title title={"Sign up"} />
      <SignUpForm />
      <p className=" font-normal mt-5 text-center">
        &copy; 2023{" "}
        <Link href="/" className="font-medium" color="foreground">
          QuizApp
        </Link>
        . All rights reserved
      </p>
    </main>
  );
}

export default page;
