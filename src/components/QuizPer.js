import React, { useState, useEffect } from "react";

function QuizPer({ person }) {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    for (let key in person) {
      setQuiz((prev) => {
        return [
          ...prev,
          ...person[key].map((item) => ({
            question: item.ques_content,
            ques_id: item.ques_id,
          })),
        ];
      });
    }
  }, [person]);

  return (
    <div>
      <div className="mx-auto">
        To take the Big Five personality assessment, rate each statement
        according to how well it describes you. Base your ratings on how you
        really are, not how you would like to be.
      </div>
      <div className="mb-4">
        <table className="mb-2 table-auto mt-4 rounded-lg">
          <thead className="text-base bg-[#c4933b] px-7 py-4  uppercase ">
            <tr>
              <th className="text-center">Question</th>
              <th className="text-center">INACCURATE</th>
              <th className="text-center"></th>
              <th className="text-center">NEUTRAL</th>
              <th className="text-center"></th>
              <th className="text-center">ACCURATE</th>
            </tr>
          </thead>
          <tbody>
            {quiz.map((item, index) => (
              <tr key={index}>
                <td className="text-left">{item.question}</td>
                {[1, 2, 3, 4, 5].map((i) => (
                  <td key={i} className="text-center">
                    <input
                      type="radio"
                      value="5"
                      name={`ques_id_${item.ques_id}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="block border border-[#616A94] rounded-2xl px-8 py-2 text-base outline-none select-none mt-4 cursor-pointer hover:bg-[#616A94] mx-auto transition duration-300">
        Submit
      </button>
    </div>
  );
}

export default QuizPer;
