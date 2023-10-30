import React from "react";
import Section from "./layout/Section";
import Title from "./layout/Title";
import Testimony from "./Testimony";

function Testimonial() {
  const testimony = [
    {
      content: "I love this app! The quizzes are challenging and entertaining.",
      name: "Sarah",
    },
    {
      content: "Amazing variety of quizzes. I learn something new every time!",
      name: "John",
    },
    {
      content: "Amazing variety of quizzes. I learn something new every time!",
      name: "John",
    },
    {
      content: "Amazing variety of quizzes. I learn something new every time!",
      name: "Daniel",
    },
  ];

  return (
    <Section>
      <Title title={"What users are saying"} />
      <div className="flex gap-6 flex-wrap justify-center">
        
      </div>
    </Section>
  );
}

export default Testimonial;
