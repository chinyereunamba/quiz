import React from "react";
import FeaturesCard from "./Card";
import Title from "./layout/Title";
import Section from "./layout/Section";

function SectionTwo() {
  const features = [
    {feature:"AI-Generated Questions", img: '/ai.svg'},
    {feature:"User-Friendly Interface", img: '/ui.png'},
    {feature:"Diverse Topics", img: ''},
  ];
  return (
    <Section>
      <Title title={'Welcome to Our Quiz App!'}/>
      <p className="text-xl">
        Our app offers a wide range of quizzes on various topics. Challenge your
        knowledge and learn new things in a fun way.
      </p>
      <div className="my-10">
        <h2 className="md:text-xl text-center font-semibold text-2xl">Key Features</h2>
        <div className="my-10 flex gap-5 justify-center flex-wrap">
          {features.map((feature, index) => (
            <FeaturesCard key={index} title={feature.feature} img={feature.img} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default SectionTwo;
