import React from "react";
import { Protected } from "@/components/utils/Protected";
import DashboardIntro from "@/components/dashboard/DashboardIntro";
import { Button, Card, CardBody } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";

function page() {
  return (
    <Protected>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold pb-6">Hi, Welcome back</h2>
        <Button color="primary" className="rounded-md" endContent={<PlusIcon />}>
          Create new quiz
        </Button>
      </div>
      <DashboardIntro />
      <section className="grid flex-1 grid-cols-3 gap-6">
        <Card className="col-span-2 rounded-md shadow-none">
          <CardBody>hello</CardBody>
        </Card>
        <Card className="col-span-1 rounded-md shadow-none"></Card>
      </section>
    </Protected>
  );
}

export default page;
