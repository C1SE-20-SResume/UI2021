import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Over from "./Over";

function Quiz() {
  const [cookies] = useCookies(["user"]);

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
    console.log(process.env.REACT_APP_API_URL);
    fetch(
      `${process.env.REACT_APP_API_URL}/candidate/quiz/test?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((res) => {
        let listQuiz = { ...res.aptitude };
        for (let key in listQuiz) {
          if (listQuiz[key] !== null) {
            console.log(listQuiz[key]);
            setQuiz((prev) => {
              return [
                ...prev,
                ...listQuiz[key].map((item) => ({
                  question: item.ques_content,
                  options:
                    (item.option !== null &&
                      shuffle([
                        ...item.option.map((option) => option.option_content),
                      ])) ||
                    [],
                  answer:
                    item.option &&
                    item.option.find((option) => option.correct).option_content,
                })),
              ];
            });
          }
        }
      })
      .catch((err) => console.error(err));
  }, [cookies.user]);

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
      {number === 4 && <Over score={score} number={4} />}
    </div>
  );
}

export default Quiz;
