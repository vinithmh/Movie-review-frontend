import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import api from "../api/loginapp";

function About() {
  const intialvalue = "";

  const [Moviename, setMoviename] = useState(intialvalue);
  const [Moviereview, setMoviereview] = useState(intialvalue);

  function updateMoviename(event) {
    const Moviename = event.target.value;
    setMoviename(Moviename);
  }
  function updateMoviereview(event) {
    const Moviereview = event.target.value;
    setMoviereview(Moviereview);
  }
  const postReview = (event) => {
    event.preventDefault();
    api
      .post("/home", {
        movieName: Moviename,
        movieReview: Moviereview,
      })
      .then((res) => console.log("Posting data", res))
      .catch((err) => console.log(err));

    setMoviename("");
    setMoviereview("");
  };

  return (
    <div className="homeDiv">
      <form>
        <input
          type="text"
          placeholder="Movie name"
          onChange={updateMoviename}
          value={Moviename}
        />
        <input
          type="text"
          placeholder="Movie review"
          onChange={updateMoviereview}
          value={Moviereview}
        />
        <button onClick={postReview}>Submit</button>
      </form>
    </div>
  );
}

export default About;
