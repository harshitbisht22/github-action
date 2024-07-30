import React from "react";
import { FlipWords } from "./ui/flip-words";// Ensure the correct import path

export const FlipWordsDemo: React.FC = () => {
  const words = [ "Deploy","Efficient", "Reliable", "aRutomated", "Scalable"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
   
        <span><FlipWords words={words} />workflows with GitHub Actions</span>
      </div>
    </div>
  );
};

export default FlipWordsDemo;
