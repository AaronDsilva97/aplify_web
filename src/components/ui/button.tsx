"use client";

import { Button } from "flowbite-react";

interface ButtonComponentProps {
  children: React.ReactNode;
  onClick: () => void;
}

function ButtonComponent({ children, onClick }: ButtonComponentProps) {
  return (
    <Button onClick={onClick} className="bg-blue-500 text-white">
      {children}
    </Button>
  );
}
