import { Button, Link } from "@nextui-org/react";
import React from "react";

function Intro() {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-primary/10 -skew-y-6 z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10 min-h-[50vh] grid place-items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Test Your Knowledge with Fun Quizzes!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Challenge yourself, learn new things, and compete with friends in
            our exciting quiz platform.
          </p>
          <Button
            as={Link}
            href="/login"
            color="primary"
            size="lg"
            className="font-semibold"
          >
            Start Quiz Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
