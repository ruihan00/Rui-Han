import React, { useRef } from "react";
import "./title.css";
import Constellation from "./constellation";

function Title(props) {
  return (
    <div className="container">
      <div className="title-container">
        <div className="inner-container">
          <h1 className="title">
            Hello! I'm Rui Han
            <span className="wave hand">👋</span>
          </h1>
          <div className="intro">
            <p className="intro-1">
              I am a final Computer Science undergraduate at National University
              of Singapore.{" "}
            </p>
          </div>
          <div className="contact">
            <a className="contact-icon" href="https://github.com/ruihan00">
              <i class="fa-brands fa-github"></i>
            </a>
            <a className="contact-icon" href="www.linkedin.com/in/lau-rui-han">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div></div>
      <div className="title-divider">
        <div className="title-down-container">
          <div
            className="title-down-btn"
            onClick={() =>
              props.experienceRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <i class="fa-solid fa-circle-chevron-down fa-bounce fa-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Title;
