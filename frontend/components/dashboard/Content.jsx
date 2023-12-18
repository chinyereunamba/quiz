"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Button, Table, TableHeader, TableColumn } from "@nextui-org/react";
import DashboardIntro from "./DashboardIntro";

function Content() {
  const { data: session } = useSession();
  const [quizData, setQuizData] = useState([]);

  async function getData() {
    const response = await fetch("http://127.0.0.1:8000/api/quiz_view/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuizData(data);
      });
  }
  return (
    <>
      <DashboardIntro />
    
      <Button onClick={getData}>Fetch quiz</Button>
      <table>
        <thead>
          <tr>
            <th>s/N</th>
            <th>Quiz</th>
          </tr>
        </thead>
        <tbody>
          {quizData.map((item, index) => (
            <tr key={index}>
              <td>{ item.id }</td>
              <td>{ item.title }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  );
}

export default Content;
