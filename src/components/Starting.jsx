import React from "react";

import { useNavigate } from "react-router-dom";

function Starting() {
  const navigate = useNavigate();
  return (
    <div className="startingDiv">
      <form className="form">
        <div className="buttonContainer">
          <button
            className="buttonstyle"
            onClick={() => navigate("signupform")}
          >
            Signup
          </button>
        </div>
        <div className="buttonContainer">
          <button
            className="buttonstyle"
            onClick={() => navigate("signinform")}
          >
            Signin
          </button>
        </div>
      </form>
    </div>
  );
}

export default Starting;
