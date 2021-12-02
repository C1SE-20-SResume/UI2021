import React, { Component, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function FuncEditJob() {
  const { job_id } = useParams();
  const [inputList, setInputList] = useState([{ keyword: "", weight: "" }]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    if (inputList.length == 10) {
      toast.error("Sorry :( keyword must be less than 10 elements ");
      return false;
    }
    setInputList([...inputList, { keyword: "", weight: "" }]);
  };
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie] = useCookies(["user"]);
  const onSubmit = (data) => {
    console.log(data);
    var formdata = new FormData();
    // formdata.append("job_title", "eventvalue");
    // formdata.append("job_descrip", "evenvalue");
    // formdata.append("job_require", "eventvalue");
    // formdata.append("job_benefit", "eventvalue");
    // formdata.append("job_place", "eventvalue");
    // formdata.append("salary", 123.12);
    // formdata.append("date_expire", "2020/09/09");
    // formdata.append("job_keyword", JSON.stringify(inputList));
    formdata.append("job_title", data.jobtitle);
    formdata.append("job_descrip", data.jobDescription);
    formdata.append("job_require", data.jobRequire);
    formdata.append("job_benefit", data.jobBenefit);
    formdata.append("job_place", data.jobPlace);
    formdata.append("salary", data.salary);
    formdata.append("date_expire", data.dateExpire);
    formdata.append("job_keyword", JSON.stringify(inputList));

    var requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/job/update/${job_id}?api_token=${cookies.user}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        toast.success("you have successfully added  ");
      })
      .catch((error) => alert("error", error));
  };

  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/job/edit/${job_id}?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJob(data.data);
        setInputList(data.data.job_keyword);
        console.log("check job array key :>>", data.data.job_keyword);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("check inputlist");

  return (
    <>
      <div className="job-bx-title">
        <h5 className="h5-title">EDIT JOB</h5>
      </div>

      <div className="flexible-div">
        <form onSubmit={handleSubmit(onSubmit)} className="form-add-job">
          <div className="row-input">
            <div className="box-shield">
              <label className="lable-row-input">Job Title</label>
              <input
                ref={register}
                name="jobtitle"
                type="text"
                defaultValue={job.job_title}
                placeholder="title"
              ></input>
            </div>
            <div className="box-shield">
              <label className="lable-row-input">Job Require</label>
              <input
                ref={register}
                defaultValue={job.job_require}
                type="text"
                name="jobRequire"
              ></input>
            </div>
          </div>
          <div className="row-input-desc">
            <label className="lable-row-input">Job Description</label>
            <textarea
              ref={register}
              defaultValue={job.job_descrip}
              name="jobDescription"
              rows={5}
              cols={5}
            >
              {" "}
            </textarea>
          </div>
          <div className="row-input">
            <div className="box-shield">
              <label className="lable-row-input">Job Benefit</label>
              <input
                ref={register}
                type="text"
                defaultValue={job.job_benefit}
                name="jobBenefit"
              ></input>
            </div>
            <div className="box-shield">
              <label className="lable-row-input">Job Place</label>
              <input
                ref={register}
                type="text"
                defaultValue={job.job_place}
                name="jobPlace"
              ></input>
            </div>
          </div>
          <div className="row-input">
            <div className="box-shield">
              <label className="lable-row-input">Salary</label>
              <input
                ref={register}
                defaultValue={job.salary}
                type="number"
                name="salary"
              ></input>
            </div>
            <div className="box-shield">
              <label className="lable-row-input">Date Expire</label>
              <input
                ref={register}
                type="datetime-local"
                name="dateExpire"
              ></input>
            </div>
          </div>
          {inputList.map((x, i) => {
            return (
              <div className="row-input">
                <div className="box-shield">
                  <label className="lable-row-input">Keyword </label>
                  <select
                    defaultValue={inputList[i].keyword}
                    name="keyword"
                    onChange={(e) => handleInputChange(e, i)}
                  >
                    <option value="java">java</option>
                    <option value="php">php</option>
                    <option value="python">python </option>
                    <option value="swift">swift</option>
                    <option value="c#">c#</option>
                    <option value="objectC">object-C</option>
                    <option value="dart">dart</option>
                    <option value="reactjs">reactjs</option>
                    <option value="anglular">anglular</option>
                    <option value="laravel">laravel</option>
                    <option value="nodejs">nodejs</option>
                    <option value="veujs">veujs</option>
                  </select>
                </div>
                <div className="box-shield">
                  <label className="lable-row-input">Weight </label>
                  <select
                    defaultValue={inputList[i].weight}
                    name="weight"
                    onChange={(e) => handleInputChange(e, i)}
                  >
                    <option value="1">very low</option>
                    <option value="2">low</option>
                    <option value="3">medium</option>
                    <option value="4">high</option>
                    <option value="5">very high</option>
                  </select>
                </div>
                <div className="btn-box">
                  {inputList.length - 1 === i && (
                    <button id="button-add-key" onClick={handleAddClick}>
                      <ion-icon
                        id="add-circle-outline"
                        name="add-circle-outline"
                      ></ion-icon>
                    </button>
                  )}
                  {inputList.length !== 1 && (
                    <button
                      id="button-remove-key"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <ion-icon
                        id="trash-outline"
                        name="trash-outline"
                      ></ion-icon>
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          <button type="submit" class="upload-job-button">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}

export default FuncEditJob;
