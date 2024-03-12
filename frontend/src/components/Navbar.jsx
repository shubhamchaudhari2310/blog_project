import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            primary
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link active" to="/add-blog">
                Add Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
