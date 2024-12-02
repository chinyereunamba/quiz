import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { BrainCircuitIcon, TrophyIcon, UsersIcon } from "lucide-react";
import React from "react";

const cards = [
  {
    icon: BrainCircuitIcon,
    no: 24,
    name: "Total Quizzes",
  },
  {
    icon: UsersIcon,
    no: 123,
    name: "Quizzes Taken",
  },
  {
    icon: TrophyIcon,
    no: "78%",
    name: "Avg. Score",
  },
];

function DashboardIntro() {
  return (
    <section className="flex gap-6 mb-6">
      {cards.map((item, index) => (
        <Card className="max-w-sm w-full shadow-none rounded-md" key={index}>
          <CardBody className="flex flex-row-reverse justify-between items-center gap-6 py-8">
            <span>
              <item.icon size={40} className="text-primary" />
            </span>
            <div className="">
              <p className="text-3xl font-bold">{item.no}</p>
              <p className="text-small">{item.name}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}

export default DashboardIntro;
