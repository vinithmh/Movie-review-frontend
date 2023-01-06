import React, { useState } from "react";
import api from "../api/loginapp";
import { useNavigate } from "react-router-dom";

function Input() {
  const navigate = useNavigate();
  const intialvalue = "";

  const [Fullname, setFullname] = useState(intialvalue);
  const [Username, setUsername] = useState(intialvalue);
  const [Email, setEmail] = useState(intialvalue);
  const [Password, setPassword] = useState(intialvalue);

  function updateFullname(event) {
    const fullName = event.target.value;
    setFullname(fullName);
  }

  function updateUsername(event) {
    const Username = event.target.value;
    setUsername(Username);
  }

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
      .post("/signup", {
        fullName: Fullname,
        username: Username,
        email: Email,
        password: Password,
      })
      .then((res) => console.log("Posting data", res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form action="/home">
        <input
          type="text"
          placeholder="Full name"
          onChange={updateFullname}
          value={Fullname}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={updateUsername}
          value={Username}
        />
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

export default Input;
