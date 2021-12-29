import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const nav = () => (
    <nav className="nav">
      <Link to="/" className="nav-item nav-link active">
        Home
      </Link>

      <Link to="/signin" className="nav-item nav-link active">
        Signin
      </Link>

      <Link to="/signup" className="nav-item nav-link active">
        Signup
      </Link>
    </nav>
  );

  return (
    <>
      {nav()}
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
