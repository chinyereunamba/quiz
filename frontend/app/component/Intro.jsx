import { Button } from "@nextui-org/react";
import React from "react";

function Intro() {
  return (
    <section className="p-6 flex flex-col h-screen items-center justify-center gap-unit-2xl">
      <h1 className="text-7xl text-center font-bold intro">
        Test Your Knowledge with Fun Quizzes!
          </h1>
          <p className="text-center font-normal text-2xl min-w-unit-9 max-w-5xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet minus fugiat at deleniti cumque inventore magni hic? Aperiam, dolores!</p>
      <Button size="lg" radius="sm" color="primary" variant="faded">Start Quiz Now</Button>
    </section>
  );
}

export default Intro;
