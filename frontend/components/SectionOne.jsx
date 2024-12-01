"use client";

import React from "react";
import Title from "./layout/Title";
import Section from "./layout/Section";
import Category from "./Category";

function SectionOne() {
  const categories = [
    {
      img: "/science.jpg",
      title: "Science",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem ab temporibus sit voluptas non.",
    },
    {
      img: "/general.jpg",
      title: "General Knowledge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem ab temporibus sit voluptas non.",
    },
  ];

  return (
    <Section>
      <Title title={"Popular Quiz Categories"} />
      <section className="categories flex flex-col gap-12 min-w-full ">
        {categories.map((item, index) => (
          <Category
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            className={`${index+1 % 2 == 0 && "flex-row-reverse"}`}
          />
        ))}
      </section>
    </Section>
  );
}

export default SectionOne;
