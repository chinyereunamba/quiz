import React from "react";
import FeaturesCard from "./Card";
import Title from "./layout/Title";
import Section from "./layout/Section";
import { Card, CardBody } from "@nextui-org/react";
import { BookOpen, Brain, Users } from "lucide-react";

function SectionTwo() {
  const features = [
    { feature: "AI-Generated Questions", img: "/ai.svg" },
    { feature: "User-Friendly Interface", img: "/ui.png" },
    { feature: "Diverse Topics", img: "/diverse.png" },
  ];
  return (
    // <Section>
    //   <Title title={"Welcome to Our Quiz App!"} />
    //   <p className="md:text-xl text-center">
    //     Our app offers a wide range of quizzes on various topics. Challenge your
    //     knowledge and learn new things in a fun way.
    //   </p>
    //   <div className="my-10">
    //     <h2 className="md:text-xl text-center font-semibold text-2xl">
    //       Key Features
    //     </h2>
    //     <div className="mt-8 flex gap-5 justify-center flex-wrap">
    //       {features.map((feature, index) => (
    //         <FeaturesCard
    //           key={index}
    //           title={feature.feature}
    //           img={feature.img}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </Section>
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Choose Our Quiz App?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="w-12 h-12" />}
            title="AI-Generated Questions"
            description="Unique and challenging questions created by advanced AI."
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12" />}
            title="Diverse Topics"
            description="A wide range of subjects to suit every interest and expertise."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Compete with Friends"
            description="Challenge your friends and climb the leaderboards together."
          />
        </div>
      </div>
    </section>
  );
}
function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-content1 hover:bg-content2 transition-colors cursor-pointer">
      <CardBody>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-primary">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </CardBody>
    </Card>
  );
}
export default SectionTwo;
