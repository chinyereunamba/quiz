import React from "react";
import { Image } from "@nextui-org/react";

function Category({ img, title, description }) {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-8 justify-center items-center">
      <div className="img rounded-md justify-self-center md:w-1/2 self-center cursor-pointer">
        <Image
          width={600}
          height={400}
          src={img}
          className="w-full"
          alt={title}
          isZoomed
        />
      </div>
      <div className="lg:p-6 category gap-6 lg:gap-10 md:w-1/2 px-4">
        <h1 className="mt-6 mb-2 text-xl md:mt-0 md:text-3xl lg:text-4xl font-semibold">
          {title}
        </h1>
        <p className="md:text-xl !leading-8 text-wrap">
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente
          alias saepe laboriosam ducimus quibusdam sequi tempora voluptatem quis
          doloribus?
        </p>
      </div>
    </div>
  );
}

export default Category;
