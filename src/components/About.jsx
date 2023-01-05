import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" id="moviename" placeholder="Movie Name"></input>
      <input type="text" id="moviereview" placeholder="Movie Review"></input>
    </div>
  );
}

export default About;
