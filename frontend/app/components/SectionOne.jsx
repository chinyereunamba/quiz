"use client";

import React from "react";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import Title from "./layout/Title";
import Section from "./layout/Section";

function SectionOne() {
  return (
    <Section>
      <Title title={'Popular Quiz Categories'}/>
      <section className="categories flex flex-col gap-0 min-w-full ">
        <div className="flex flex-col md:flex-row">
          <div className="img lg:w-1/2">
            <img src="/img-1.jpg" className="w-full" alt="" />
          </div>
          <div className="p-6 category gap-10 lg:w-1/2">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">General Knowledge</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem ab temporibus sit voluptas non.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="img lg:w-1/2">
            <img src="/img-1.jpg" className="w-full" alt="" />
          </div>
          <div className="p-6 category gap-10 lg:w-1/2">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold">Science</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem ab temporibus sit voluptas non.</p>
          </div>
        </div>
      </section>
    </Section>
  );
}

export default SectionOne;
