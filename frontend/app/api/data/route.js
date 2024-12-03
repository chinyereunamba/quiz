import { NextResponse } from "next/server";

const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which programming language is used in React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    id: 4,
    question: "Who wrote the novel *1984*?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "J.K. Rowling",
      "Ernest Hemingway",
    ],
    correctAnswer: "George Orwell",
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    correctAnswer: "Au",
  },
  {
    id: 6,
    question: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
    options: ["Japan", "Brazil", "China", "USA"],
    correctAnswer: "Japan",
  },
  {
    id: 7,
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "Home Tool Markup Language",
      "HyperTool Markup Logic",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    id: 8,
    question: "Which element has the atomic number 1?",
    options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    correctAnswer: "Hydrogen",
  },
  {
    id: 9,
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    id: 10,
    question: "Who painted the *Mona Lisa*?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 11,
    question: "Which programming language is known as the backbone of the web?",
    options: ["Python", "C#", "JavaScript", "Ruby"],
    correctAnswer: "JavaScript",
  },
  {
    id: 12,
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "100°C", "-32°C"],
    correctAnswer: "0°C",
  },
  {
    id: 13,
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    id: 14,
    question: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
    correctAnswer: "Charles Babbage",
  },
  {
    id: 15,
    question: "Which is the smallest country in the world by area?",
    options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
    correctAnswer: "Vatican City",
  },
];

export async function GET() {
  return NextResponse.json(quizData);
}