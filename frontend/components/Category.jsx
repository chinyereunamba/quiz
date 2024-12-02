import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

function Category({ image, title, description, className }) {
  return (
    <Card className="bg-content2 hover:bg-content3 transition-colors cursor-pointer max-w-sm">
      <CardBody className="p-0">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-80 object-cover rounded-b-none"
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
