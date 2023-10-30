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
    <Card
      className="max-w-[400px]"
      isHoverable
      isPressable
      onPress={() => console.log("item pressed")}
      shadow="none"
    >
      <CardBody className="text-small text-default-400 justify-center">
        <p className="text-lg text-center " color="foreground">
          {content}
        </p>
      </CardBody>
      <CardFooter className="flex justify-center">
        <p className="font-semibold text-lg">{name}</p>
      </CardFooter>
    </Card>
  );
}
