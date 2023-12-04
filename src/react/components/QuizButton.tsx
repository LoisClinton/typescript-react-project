import React, { useState } from "react";

export const QuizButton = () => {
  interface TopicTemplate {
    name: string;
    categoryNumber: number;
  }
  const [isLoading, setIsLoading] = useState(true);
  const [categoryNum, setCategoryNum] = useState(0);
  const [topic, setTopic] = useState();

  async function getTopicCategoryNum(topic: string) {
    const res = await fetch(`http://localhost:3000/api/topics/${topic}/CatNum`);
    const data = await res.json();
    setCategoryNum(data.categoryNum);
  }

  async function getTopic(topic: string) {}

  return isLoading ? (
    <div>LOADING</div>
  ) : (
    <div>
      <h1></h1>
    </div>
  );
};
