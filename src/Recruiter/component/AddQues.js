import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
function AddQues() {
  const [cookies] = useCookies(["user"]);
  const [ques, setQues] = useState({
    option: "1",
  });
  const [personality] = useState({
    4: "openness",
    5: "conscientiousness",
    6: "extroversion",
    7: "agreeableness",
    8: "neuroticism",
  });

  const [aptitude] = useState({
    1: "math",
    2: "english",
    3: "programming",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setQues({ [e.target.name]: e.target.value });
  };

  const onChangeApti = (e) => {
    e.preventDefault();
    setQues({ ...ques, aptitude: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data;
    if (ques.option === "2") {
      data = {
        type_id: e.target.aptitude.value,
        ques_content: e.target.ques_content.value,
        ques_option: [
          {
            opt_content: e.target.opt_content1.value,
            correct: e.target.right.value === "1" ? 1 : 0,
          },
          {
            opt_content: e.target.opt_content2.value,
            correct: e.target.right.value === "2" ? 1 : 0,
          },
          {
            opt_content: e.target.opt_content3.value,
            correct: e.target.right.value === "3" ? 1 : 0,
          },
          {
            opt_content: e.target.opt_content4.value,
            correct: e.target.right.value === "4" ? 1 : 0,
          },
        ],
      };
    } else {
      data = {
        type_id: e.target.personality.value,
        ques_content: e.target.ques_content.value,
      };
    }
    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/ques/add?api_token=${cookies.user}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Add question success");
        } else {
          toast.error("Add question fail");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="job-bx-title">
        <h5 className="h5-title">ADD QUESTION</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="colunm-input">
            <label className="lable-row-input" htmlFor="question">
              Question
            </label>
            <select id="question" name="option" onChange={handleChange}>
              <option value="1">Personality</option>
              <option value="2">Aptitude</option>
            </select>
          </div>
          <div>
            {ques.option === "1" && (
              <div>
                <div className="colunm-input">
                  <label className="lable-row-input" htmlFor="personality">
                    Personality
                  </label>
                  <select id="personality" name="personality">
                    {Object.keys(personality).map((key) => (
                      <option key={key} value={key}>
                        {personality[key]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="colunm-input">
                  <label className="lable-row-input" htmlFor="ques_content">
                    Question +
                  </label>
                  <input type="text" name="ques_content" />
                </div>
              </div>
            )}
            {ques.option === "2" && (
              <div>
                <div className="colunm-input">
                  <label className="lable-row-input" htmlFor="aptitude">
                    Aptitude
                  </label>
                  <select id="aptitude" name="aptitude" onChange={onChangeApti}>
                    {Object.keys(aptitude).map((key) => (
                      <option key={key} value={key}>
                        {aptitude[key]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="colunm-input">
                    <label className="lable-row-input" htmlFor="ques_content">
                      Question +
                    </label>
                    <input type="text" name="ques_content" />
                  </div>

                  <div>
                    <div class="answer-quizz">
                      <label className="lable-row-input" htmlFor="answer1">
                        Answer 1
                      </label>
                      <input
                        id="input-answer"
                        type="text"
                        name="opt_content1"
                      />
                      <input type="radio" name="right" value="1" />
                    </div>
                    <div class="answer-quizz">
                      <label className="lable-row-input" htmlFor="answer2">
                        Answer 2
                      </label>
                      <input
                        id="input-answer"
                        type="text"
                        name="opt_content2"
                      />
                      <input type="radio" name="right" value="2" />
                    </div>
                    <div class="answer-quizz">
                      <label className="lable-row-input" htmlFor="answer3">
                        Answer 3
                      </label>
                      <input
                        id="input-answer"
                        type="text"
                        name="opt_content3"
                      />
                      <input type="radio" name="right" value="3" />
                    </div>
                    <div class="answer-quizz">
                      <label className="lable-row-input" htmlFor="answer4">
                        Answer 4
                      </label>
                      <input
                        id="input-answer"
                        type="text"
                        name="opt_content4"
                      />
                      <input type="radio" name="right" value="4" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button type="submit" class="upload-job-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddQues;
