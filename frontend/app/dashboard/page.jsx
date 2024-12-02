import React from "react";
import { Protected } from "@/components/utils/Protected";
import DashboardIntro from "@/components/dashboard/DashboardIntro";
import { Card, CardBody } from "@nextui-org/react";

function page() {
  return (
    <Protected>
      <h2 className="text-2xl font-bold pb-6">Hi, Welcome back</h2>
      <DashboardIntro />
      <section className="grid flex-1 grid-cols-3 gap-6">
        <Card className="col-span-2 rounded-md">
          <CardBody>hello</CardBody>
        </Card>
        <Card className="col-span-1 rounded-md">

        </Card>
      </section>
    </Protected>
  );
}

export default page;
