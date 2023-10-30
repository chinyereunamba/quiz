"use client";

import React from "react";
// import Image from "next/image";
import { Image } from "@nextui-org/react";
import Title from "./layout/Title";
import Section from "./layout/Section";

function SectionOne() {
  return (
    <Section>
      <Title title={"Popular Quiz Categories"} />
      <section className="categories flex flex-col gap-10 min-w-full ">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="img rounded-md">
            <Image
              width={500}
              height={400}
              src="./general.jpg"
              className="w-full border-r-3"
              alt=""
              color="foreground"
            />
          </div>
          <div className="lg:p-6 category gap-10 lg:w-1/2">
            <h1 className="mt-6 mb-4 text-xl md:text-3xl md:mt-0 lg:text-4xl font-semibold">
              General Knowledge
            </h1>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem
              ab temporibus sit voluptas non.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center">
          <div className="img rounded-md">
            <Image
              width={500}
              height={400}
              src="/science.jpg"
              className="w-full"
              alt=""
            />
          </div>
          <div className="lg:p-6 category gap-10 lg:w-1/2">
            <h1 className="mt-6 mb-4 text-xl md:mt-0 md:text-3xl lg:text-4xl font-semibold">
              Science
            </h1>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem
              ab temporibus sit voluptas non.
            </p>
          </div>
        </div>
      </section>
    </Section>
  );
}

export default SectionOne;
