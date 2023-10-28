"use client";

import React from "react";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

function SectionOne() {
  return (
    <section className="flex flex-col min-h-unit-4xl items-center justify-center gap-unit-2xl">
      <h1 className="text-6xl font-semibold mb-8">Popular Quiz Categories</h1>
      <section className="flex flex-col gap-0 min-w-full ">
        <div className="flex">
          <div className="img">
            <img src="/img-1.jpg" alt="" />
          </div>
          <div className="p-6 category gap-10">
            <h1 className="text-5xl font-semibold">General Knowledge</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem ab temporibus sit voluptas non.</p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="img">
            <img src="/img-1.jpg" alt="" />
          </div>
          <div className="p-6 category gap-10">
            <h1 className="text-5xl font-semibold">Science</h1>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem ab temporibus sit voluptas non.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SectionOne;
