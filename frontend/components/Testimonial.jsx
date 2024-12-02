import React from "react";
import Title from "./layout/Title";
import { Card, CardBody } from "@nextui-org/react";

function Testimonial() {
  const testimony = [
    {
      quote:
        "This quiz app has made studying so much more enjoyable. I love the variety of topics!",
      name: "Alex Johnson",
      role: "Student",
    },
    {
      quote:
        "An excellent tool for engaging my students. The AI-generated questions are always fresh and challenging.",
      name: "Sarah Lee",
      role: "Teacher",
    },
    {
      quote: "Amazing variety of quizzes. I learn something new every time!",
      name: "John",
      role: "Trivia Enthusiast",
    },
    {
      quote:
        "I've tried many quiz apps, but this one stands out with its user-friendly interface and diverse question bank.",
      name: "Mike Brown",
      role: "Teacher",
    },
  ];

  return (
    <section className="py-20 px-4 bg-content2">
      <div className="max-w-7xl mx-auto">
        <Title title={"What Users Are Saying"} />
        <div className="grid md:grid-cols-3 gap-8">
          {testimony.map((item, index) => (
            <TestimonialCard
              name={item.name}
              role={item.role}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, quote }) {
  return (
    <Card className="bg-content1">
      <CardBody>
        <blockquote className="text-lg mb-4">"{quote}"</blockquote>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-foreground/70">{role}</div>
      </CardBody>
    </Card>
  );
}

export default Testimonial;
