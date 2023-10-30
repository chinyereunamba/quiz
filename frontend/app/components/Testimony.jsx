'use client'
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function Testimony({content, name}) {

  return (
    <Card className="max-w-[400px]">
      <CardBody className="text-small text-default-400 justify-center">
        <p color="foreground" className="text-lg text-center">
          {content}
        </p>
      </CardBody>
      <CardFooter className="flex justify-center">
        <p className="font-semibold text-lg">{name}</p>
      </CardFooter>
    </Card>
  );
}
