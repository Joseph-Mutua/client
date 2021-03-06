import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Activate from "./auth/Activate";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/auth/activate/:token" element={<Activate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;