import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (clickedPath) => {
    if (pathname === clickedPath) {
      return { color: "#000" };
    } else {
      return { color: "#ff0000" };
    }
  };

  const nav = () => (
    <nav className="nav">
      <Link to="/" className="nav-item nav-link active" style={isActive("/")}>
        Home
      </Link>

      <Link
        to="/signin"
        className="nav-item nav-link active"
        style={isActive("/signin")}
      >
        Signin
      </Link>

      <Link
        to="/signup"
        className="nav-item nav-link active"
        style={isActive("/signup")}
      >
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