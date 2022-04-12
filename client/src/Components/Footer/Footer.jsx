import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <div className="footer-logo" style={{ cursor: "pointer" }}>
          {" "}
          <span>Ha</span>ck<span>Ov</span>er<span>flow</span>
        </div>
      </div>

      <div className="footer-navlinks">
        <ul>
          <li>
            {" "}
            <a href="#">Dashboard</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Leaderboard </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Friends </a>{" "}
          </li>
          {/* <li>
            {" "}
            <a href="#">Settings </a>{" "}
          </li> */}
        </ul>
      </div>

      <div className="footer-socials">
        <div>
          <i className="fa fa-twitter"></i>
        </div>
        <div>
          <i className="fa fa-linkedin"></i>
        </div>
        <div>
          <i className="fa fa-instagram"></i>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright &copy; 2022, All Right Reserved{" "}
          <a href="https://github.com/prykdev/HackOverflow_1"> HackOverflow</a>
        </p>
      </div>
    </div>
  );
};
