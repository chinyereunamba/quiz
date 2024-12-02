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
    {
      img: "/general.jpg",
      title: "General Knowledge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem ab temporibus sit voluptas non.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-content1">
      <div className="max-w-7xl mx-auto">
        <Title title={"Popular Quiz Categories"} />
        <div className="flex justify-center flex-wrap gap-6 max-sm:flex-col">
          {categories.map((item, index) => (
            <Category
              key={index}
              image={item.img}
              title={item.title}
              description={item.description}
              className={`${index + (1 % 2) == 0 && "flex-row-reverse"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
