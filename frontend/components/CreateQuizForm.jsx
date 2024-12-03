'use client'
import { useState } from "react";
import {
  Button,
  Input,
  Dropdown,
  Loading,
  Card,
  CardBody,
  DropdownMenu,
} from "@nextui-org/react";

export default function QuizGeneration() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [numQuestions, setNumQuestions] = useState(10);
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setQuiz(null);

  };

  return (
    <section>
      
    </section>
  );
}
