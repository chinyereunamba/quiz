import React, { useState } from "react";
import { Card, CardBody, Image, Skeleton } from "@nextui-org/react";
import dynamic from "next/dynamic";

function Category({ image, title, description, className }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Card className="bg-content1 hover:bg-content2 transition-colors cursor-pointer max-w-sm">
      <CardBody className="p-0">
        {isLoading && (
          <Skeleton
            style={{
              width: "100%",
              height: "100%",
            }}
            className="w-full h-80 object-cover rounded-b-none"
          />
        )}
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-80 object-cover rounded-b-none ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </CardBody>
    </Card>
  );
}

export default Category;
