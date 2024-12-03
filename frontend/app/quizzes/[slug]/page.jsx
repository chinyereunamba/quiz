"use client";

import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Progress } from "@nextui-org/react";
import QuizQuestion from "@/components/quiz/Question";
import { ResultsScreen } from "@/components/quiz/Result";

const QuizDisplay = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data", { method: "GET" });
        if (!response.ok) {
          console.error("Error fetching quiz data:", err);
        }
        const data = await response.json();
        setQuizData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleOptionSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [quizData[currentQuestionIndex].id]: option,
    }));
  };

  const handleSubmit = () => {
    const correctAnswers = quizData.filter(
      (question) => answers[question.id] === question.correctAnswer
    ).length;
    setShowResults(true);
  };

  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!quizData.length) return <p>No quiz data available.</p>;
  if (showResults) {
    return (
      <ResultsScreen
        quizData={quizData}
        answers={answers}
        onRetry={() => {
          setAnswers({});
          setCurrentQuestionIndex(0);
          setShowResults(false);
        }}
      />
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-3xl border shadow-lg">
        <CardBody className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-lg">
              Question <strong>{currentQuestionIndex + 1}</strong> of{" "}
              <strong className="text-primary">{quizData.length}</strong>
            </p>
            <Progress
              value={((currentQuestionIndex + 1) / quizData.length) * 100}
              className="max-w-md"
              color="primary"
            />
          </div>
          <QuizQuestion
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedOption={answers[currentQuestion.id] || null}
            onSelectOption={handleOptionSelect}
          />
          <div className="flex justify-between pt-4">
            <Button
              onClick={() =>
                setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
              }
              disabled={currentQuestionIndex === 0}
              color="primary"
              variant="flat"
            >
              Previous
            </Button>
            {currentQuestionIndex === quizData.length - 1 ? (
              <Button onClick={handleSubmit} color="primary">
                Submit
              </Button>
            ) : (
              <Button
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    Math.min(prev + 1, quizData.length - 1)
                  )
                }
                color="primary"
              >
                Next
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </main>
  );
};

export default QuizDisplay;
