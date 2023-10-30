import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function FeaturesCard({title, img}) {
  return (
    <Card className="py-4 w-72 border-0 cursor-pointer" isHoverable shadow="none">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="illustrate overflow-visible pt-8 pb-5  flex items-center">
        <Image width={ 100 } height={ 100 } src={ img } alt={title} />
      </CardBody>
    </Card>
  );
}
