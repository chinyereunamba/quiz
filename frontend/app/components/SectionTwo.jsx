import React from "react";
import FeaturesCard from "./Card";

function SectionTwo() {
  const features = [
    "AI-Generated Questions",
    "User-Friendly Interface",
    "Diverse Topics",
  ];
  return (
    <section className="p-6 flex flex-col h-unit-9xl items-center justify-center">
      <h1 className="text-6xl font-semibold mb-8">Welcome to Our Quiz App!</h1>
      <p className="text-xl">
        Our app offers a wide range of quizzes on various topics. Challenge your
        knowledge and learn new things in a fun way.
      </p>
      <div className="my-10">
        <h2 className="text-3xl">Key Features</h2>
        <div className="my-10 flex gap-3 justify-between flex-wrap">
          {features.map((feature, index) => (
            <FeaturesCard key={index} title={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
