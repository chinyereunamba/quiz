import React from "react";
import Section, { AuthSection } from "@/components/layout/Section";
import Title from "@/components/layout/Title";
import { Link } from "@nextui-org/react";
import SignUpForm from "@/components/auth/sign-up";
import { year } from "@/constants";

function page() {
  return (
    <AuthSection>
      <div className="w-full">
        <Title title={"Sign up"} />
        <SignUpForm />
        <p className=" font-normal mt-5 text-center">
          &copy; {year}{" "}
          <Link href="/" className="font-semibold" color="foreground">
            QuizApp
          </Link>
          . All rights reserved
        </p>
      </div>
    </AuthSection>
  );
}

export default page;
