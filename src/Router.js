import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;