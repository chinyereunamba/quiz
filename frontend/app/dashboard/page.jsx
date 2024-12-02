import React from "react";
import Content from "@/components/dashboard/Content";
import { Protected } from "@/components/utils/Protected";


function page() {
  return (
    <Protected>
      <Content />
    </Protected>
  );
}

export default page;
