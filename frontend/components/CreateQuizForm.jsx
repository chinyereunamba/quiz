"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";

export default function CreateQuizForm() {
  const {data: session} = useSession()
    const enteredTitle = useRef()
    const enteredNoq = useRef()
    const enteredDuration = useRef()
    const enteredDescription = useRef()


    const submitHandler = (e) => {
        e.preventDefault()

        const title = enteredTitle.current.target
        const noq = enteredNoq.current.target
        const duration = enteredDuration.current.target
        const description = enteredDescription.current.target

        const data = {
            title: title,
            duration: duration, 
            noq: noq,
            description: description
      }
      
      const response = fetch("http://127.0.0.1:8000/api/parse_view/", {
        method:"POST",
        headers: {
          'Content-Type': "application/json",
          "Authorization":`JWT ${session.access}`
        },
        body: JSON.stringify(data)
      });
    }
  return (
    <section className="p-4">
      <form
        action=""
        className="max-w-[700px] w-full flex flex-col gap-3 m-auto"
      >
        <Input
          type="text"
          variant="bordered"
          radius="sm"
          name="title"
          placeholder="Quiz title"
          ref={enteredTitle}
        />
        <div className="flex gap-3">
          <Input
            type="number"
            radius="sm"
            inputMode="numeric"
            variant="bordered"
            name="number-of-questions"
            placeholder="Number of Questions"
            ref={enteredNoq}
          />
          <Input
            type="number"
            radius="sm"
            inputMode="numeric"
            variant="bordered"
            name="duration"
            placeholder="Duration"
            ref={enteredDuration}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Textarea
            radius="sm"
            name="description"
            variant="bordered"
            placeholder="Description of quiz"
            ref={enteredDescription}
          />
        </div>
        <div>
          <Button type="submit">Create Quiz</Button>
        </div>
      </form>
    </section>
  );
}
