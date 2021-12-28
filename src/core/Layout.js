import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {

  const nav = () => (
    <nav className="nav">
      <Link to="/" className="nav-item nav-link active">
         Home
      </Link>

      <Link to="/signup" className="nav-item nav-link active">
        Signup
      </Link>
    </nav>

    // <nav className="navbar navbar-light bg-primary">
    //   <div className="container-fluid">
    //     <div className="navbar-nav">
    //       <Link to="/" className="nav-item nav-link active">
    //         Home
    //       </Link>
    //       <Link to="/signup" className="nav-item nav-link active">
    //         Signup
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );

  return (
    <>
      {nav()}
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
