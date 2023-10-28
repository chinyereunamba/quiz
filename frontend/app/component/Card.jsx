import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function FeaturesCard({title}) {
  return (
    <Card className="py-4 w-72">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">

      </CardBody>
    </Card>
  );
}
