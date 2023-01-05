import React from "react";
import { useNavigate } from "react-router-dom";

function Usernotfound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Usernotfound</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Usernotfound;
