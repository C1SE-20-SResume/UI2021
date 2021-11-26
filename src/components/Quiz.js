import React, { useState, useEffect } from "react";
import Over from "./Over";

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const pickAnswers = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setScore(score + 1);
    setNumber(number + 1);
    console.log(number);
  };

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((res) => {
        setQuiz(
          res.results.map((item) => ({
            question: item.question,
            options: shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-[calc(800px+1.75rem)] my-0 mx-auto py-8">
      {quiz[number] && (
        <>
          <div className="mx-auto">{quiz[number].question}</div>
          <div className="flex flex-col my-8 mx-auto min-h-[400px] justify-center">
            {quiz[number].options.map((item, index) => (
              <button
                key={index}
                className="block border border-[#616A94] rounded-2xl px-8 py-4 text-base outline-none select-none mt-4 cursor-pointer hover:bg-[#616A94] transition duration-300"
                onClick={pickAnswers}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
      {number === 5 && <Over score={score} number={5} />}
    </div>
  );
}

export default Quiz;
