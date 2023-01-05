import React from "react";
import Starting from "./Starting";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Signupform from "./Signupform";
import Home from "./Home";
import About from "./About";
import Signinform from "./Signinform";
import Usernotfound from "./Usernotfound";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Starting />} />
          <Route path="/about" element={<About />} />
          <Route path="/signupform" element={<Signupform />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signinform" element={<Signinform />} />
          <Route path="/usernotfound" element={<Usernotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
