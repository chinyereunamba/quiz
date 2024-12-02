import React from "react";
import LoginForm from "@/components/auth/login";
import { AuthSection } from "@/components/layout/Section";
import Title from "@/components/layout/Title";
import { Link } from "@nextui-org/react";
import { year } from "@/constants";

function Login() {
  return (
    <AuthSection>
      <div className="w-full">
        <Title title={"Login"} />
        <LoginForm />
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

export default Login;
