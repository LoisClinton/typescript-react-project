import React, { useState } from "react";
import { QuizButton } from "../components/QuizButton";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <div>LOADING</div>
  ) : (
    <main>
      <QuizButton></QuizButton>
    </main>
  );
};
