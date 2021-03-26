import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="main-header-div">
      <div className="header-inner-div">
        <Link to="/">
          <h1 style={{ fontSize: "1.5rem" }}>Movie-App-React</h1>
        </Link>

        <div className="nav-icons">
          <Link to="/">
            <i className="fas fa-home fa-3x"></i>
          </Link>

          <Link to="/favourite">
            <i className="fas fa-heart fa-3x"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
