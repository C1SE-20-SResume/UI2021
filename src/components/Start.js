import React from "react";

function Start({ setStart }) {
  const startQuiz = () => setStart(true);
  return (
    <div className="max-w-[calc(800px+1.75rem)] my-0 mx-auto pt-8">
      <div>
        <h1 className="text-[2.5rem] break-words font-bold py-8 whitespace-pre">
          What anime character are you?
        </h1>
      </div>
      <div className="px-0 break-words text-lg leading-7 py-8">
        <p>
          Is your inner anime character a magical girl or a criminal mastermind?
          Take our anime personality quiz and find out!
        </p>
      </div>
      <div className="py-8">
        <button
          className="mb-1 mx-auto flex items-center justify-center text-xl font-bold relative overflow-hidden transition duration-300 ease-linear py-2 px-8 rounded-[4rem] text-white bg-[#5c9abb] hover:bg-[#9d81bb]"
          onClick={startQuiz}
        >
          <span>Start Quiz</span>
        </button>
      </div>
    </div>
  );
}

export default Start;
