import React, { useState } from "react";
import api from "../api/loginapp";
import { useNavigate } from "react-router-dom";

function Loginininput() {
  const navigate = useNavigate();
  const intialvalue = "";

  const [Email, setEmail] = useState(intialvalue);
  const [Password, setPassword] = useState(intialvalue);

  function updateEmail(event) {
    const Email = event.target.value;
    setEmail(Email);
  }

  function updatePassword(event) {
    const Password = event.target.value;
    setPassword(Password);
  }

  const postData = (event) => {
    event.preventDefault();
    api
      .post("/signin", {
        email: Email,
        password: Password,
      })
      .then((res) => console.log("Posting data", res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Email"
          onChange={updateEmail}
          value={Email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={updatePassword}
          value={Password}
        />
        <div onClick={() => navigate("/home")}>
          <button onClick={postData}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Loginininput;
