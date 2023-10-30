import React from "react";
import Section from "./layout/Section";
import Title from "./layout/Title";
import Testimony from "./Testimony";

function Testimonial() {
  return (
    <Section>
      <Title title={"What users are saying"} />
      <div className="flex gap-6 flex-wrap">
        <Testimony
          content={
            "I love this app! The quizzes are challenging and entertaining."
          }
          name={"Sarah"}
        />
        <Testimony
          content={
            "Amazing variety of quizzes. I learn something new every time!"
          }
          name={"John"}
        />
        <Testimony
          content={
            "Amazing variety of quizzes. I learn something new every time!"
          }
          name={"John"}
        />
        <Testimony
          content={
            "Amazing variety of quizzes. I learn something new every time!"
          }
          name={"John"}
        />
      </div>
    </Section>
  );
}

export default Testimonial;
