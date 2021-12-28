import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify//dist/ReactToastify.min.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "123456",
    buttonText: "Submit",
  });

  const { name, email, password, buttonText } = values;

  const handleChange = (value) => (e) => {
    setValues({ ...values, [value]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}/signup`,
      data: {
        name,
        email,
        password,
      },
    })
      .then((res) => {
        console.log("SIGNUP SUCCESS", res);
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log("SIGNUP ERROR", err.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(err.response.data.error);
      });
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          value={email}
          type="email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary my-2" onClick={handleSubmit}>
        {buttonText}
      </button>
    </form>
  );

  return (
    <Layout>
      <div className="col-d-6 offset-md-3">
        <ToastContainer />

        <h1 className="text-center p-5">Signup</h1>
        {signupForm()}
      </div>
    </Layout>
  );
};

export default Signup;
