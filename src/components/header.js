import React from "react";
import "./com.css";
export default function header() {
  return (
    <div>
      <header>
        <a href="/" className="logo">
          <img src="https://www.sports.info/assets/images/logo_v2.svg" alt="" />
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            cricket
          </a>
          <a href="#contact">kabaddi</a>
          <a href="#about">Soccer</a>
        </div>
      </header>
    </div>
  );
}
