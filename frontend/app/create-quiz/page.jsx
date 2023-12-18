import CreateQuizForm from "@/components/CreateQuizForm";
import Layout from "@/components/dashboard/Layout";
import Title from "@/components/layout/Title";
import React from "react";

function NewQuiz() {
  return (
    <Layout>
      <Title title={"Create Quiz"} />
      <CreateQuizForm />
    </Layout>
  );
}

export default NewQuiz;
