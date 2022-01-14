import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAuth, signout } from "../auth/helpers";

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const isActive = (clickedPath) => {
    if (pathname === clickedPath) {
      return { color: "#000" };
    } else {
      return { color: "#ff0000" };
    }
  };

  const nav = () => (
    <nav className="nav">
      <Link to="/" className="nav-item nav-link" style={isActive("/")}>
        Home
      </Link>
      {!isAuth() && (
        <>
          {" "}
          <Link
            to="/signin"
            className="nav-item nav-link"
            style={isActive("/signin")}
          >
            Signin
          </Link>
          <Link
            to="/signup"
            className="nav-item nav-link"
            style={isActive("/signup")}
          >
            Signup
          </Link>
        </>
      )}

      {isAuth() && (
        <li className="nav-item">
          <span>{isAuth().name}</span>
        </li>
      )}

      {isAuth() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={() => {
              signout(() => {
                navigate("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
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
