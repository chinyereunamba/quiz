import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export const ResultsScreen = ({ quizData, answers, onRetry }) => {
  const correctAnswersCount = quizData.filter(
    (question) => answers[question.id] === question.correctAnswer
  ).length;

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-3xl border shadow-lg">
        <CardBody className="p-6 space-y-6">
          <h1 className="text-2xl font-semibold">Quiz Results</h1>
          <p>
            You scored <strong>{correctAnswersCount}</strong> out of{" "}
            <strong>{quizData.length}</strong>.
          </p>
          <div className="space-y-4">
            {quizData.map((question) => (
              <div
                key={question.id}
                className={`p-4 rounded-lg ${
                  answers[question.id] === question.correctAnswer
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                <h3 className="font-medium">{question.question}</h3>
                <p>
                  Your Answer:{" "}
                  <strong
                    className={`${
                      answers[question.id] === question.correctAnswer
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {answers[question.id] || "No answer"}
                  </strong>
                </p>
                {answers[question.id] !== question.correctAnswer && (
                  <p>
                    Correct Answer:{" "}
                    <strong className="text-green-600">
                      {question.correctAnswer}
                    </strong>
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <Button onClick={onRetry} color="primary" variant="flat">
              Retry Quiz
            </Button>
            <Button as={Link} href="/dashboard" color="primary">
              Go to Dashboard
            </Button>
          </div>
        </CardBody>
      </Card>
    </main>
  );
};
