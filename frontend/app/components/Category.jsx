import React from 'react'
import { Image } from "@nextui-org/react";

function Category({img, title, description}) {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center">
      <div className="img rounded-md">
        <Image
          width={500}
          height={400}
          src={img}
          className="w-full"
          alt={title}
        />
      </div>
      <div className="lg:p-6 category gap-6 lg:gap-10 lg:w-1/2">
        <h1 className="mt-6 mb-2 text-xl md:mt-0 md:text-3xl lg:text-4xl font-semibold">
          {title}
        </h1>
        <p className="md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Category