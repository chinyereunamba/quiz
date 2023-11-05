import React from "react";
import Section from "../components/layout/Section";
import Title from "../components/layout/Title";
import { Link } from "@nextui-org/react";
import SignUpForm from "../components/auth/sign-up";

function page() {
  return (
    <Section>
      <Title title={"Sign up"} />
      <SignUpForm />
      <p className=" font-normal mt-5 text-center">
        &copy; 2023{" "}
        <Link href="/" className="font-medium" color="foreground">
          QuizApp
        </Link>
        . All rights reserved
      </p>
    </Section>
  );
}

export default page;
