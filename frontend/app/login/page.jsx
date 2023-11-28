import React from "react";
import LoginForm from "@/components/auth/login";
import Section from "@/components/layout/Section";
import Title from "@/components/layout/Title";
import { Link } from "@nextui-org/react";

function page() {
  return (
    <Section>
      <Title title={"Login"} />
      <LoginForm />
      <p className=" font-normal mt-10 text-center">
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
