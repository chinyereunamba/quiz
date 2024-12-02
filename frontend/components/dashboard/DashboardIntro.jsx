import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import { AiFillAndroid } from "react-icons/ai";

function DashboardIntro() {
  return (
    <section className="flex gap-6 mb-6">
      {[2, 3, 4, 5].map((index) => (
        <DashCard key={index} />
      ))}
    </section>
  );
}

export default DashboardIntro;

export const DashCard = () => {
  return (
    <Card className="max-w-sm w-full h-[20rem] rounded-md">
      <CardBody className="flex flex-col justify-center items-center gap-6 py-8">
        <span className="w-12 h-12 rounded-full bg-secondary grid place-items-center">
          <AiFillAndroid size={24} />
        </span>
        <div className="text-center">
          <h1 className="text-3xl mb-3">713k</h1>
          <p className="text-small">Weekly Sales</p>
        </div>
      </CardBody>
    </Card>
  );
};
