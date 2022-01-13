import React, { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import jwt from "jsonwebtoken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify//dist/ReactToastify.min.css";

const Activate = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  const { name, show } = values;

  const { token } = useParams();

  useEffect(() => {
    console.log("STATE CHANGED!", token);
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}/account-activation`,
      data: {
        token,
      },
    })
      .then((res) => {
        console.log("ACCOUNT ACTIVATION SUCCESS", res.data.message);

        //Save the response (user, token) to localstorage/cookie
        setValues({
          ...values,
          name: "",
          show: false,
        });

        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log("ACTIVATION ERROR", err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5">
        Hey {name}, click the button below to activate your account
      </h1>

      <button className="btn btn-outline-primary" onClick={handleSubmit}>
        Activate Account
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="col-d-6 offset-md-3">
        <ToastContainer />

        {activationLink()}
      </div>
    </Layout>
  );
};

export default Activate;
