"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Button, Table, TableHeader, TableColumn } from "@nextui-org/react";

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
    <section className="p-4">
      {/*  */}
      <div className="flex gap-8">
        <div className="max-w-[350px] border-1 p-2.5 bg-white rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolore aperiam et sint doloribus.
        </div>
        <div className="max-w-[350px] border-1 p-2.5 bg-white rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolore aperiam et sint doloribus.
        </div>
        <div className="max-w-[350px] border-1 p-2.5 bg-white rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolore aperiam et sint doloribus.
        </div>
      </div>

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
    </section>
  );
}

export default Content;
