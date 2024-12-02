"use client";

import { Button, Card, CardBody } from "@nextui-org/react";
import { HomeIcon, HelpCircleIcon } from "lucide-react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="w-full max-w-md">
        <CardBody className="flex flex-col items-center text-center gap-4 p-8">
          <HelpCircleIcon size={64} className="text-warning" />
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4 mt-4">
            <Button
              as={Link}
              href="/"
              color="primary"
              variant="solid"
              startContent={<HomeIcon size={20} />}
            >
              Go Home
            </Button>
            <Button as={Link} href="/quizzes" color="secondary" variant="flat">
              Browse Quizzes
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
