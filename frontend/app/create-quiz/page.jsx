import CreateQuizForm from "@/components/CreateQuizForm";
import Title from "@/components/layout/Title";
import Protected from "@/components/utils/Protected";
import React from "react";

function NewQuiz() {
  return (
    <Protected>
      <Title title={"Create Quiz"} />
      <CreateQuizForm />
    </Protected>
  );
}

export default NewQuiz;
