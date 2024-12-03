import CreateQuizForm from "@/components/CreateQuizForm";
import Title from "@/components/layout/Title";
import Protected from "@/components/layout/Protected";
import React from "react";

function NewQuiz() {
  return (
    <Protected>
      <CreateQuizForm />
    </Protected>
  );
}

export default NewQuiz;
