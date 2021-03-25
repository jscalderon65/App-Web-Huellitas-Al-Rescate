import React from "react";
import { GithubOutlined } from "@ant-design/icons";
const NavBarDashBoard = () => {
  return (
    <div className="footer-dashboard">
      <div className="f-styles">© 2021</div>
      <a
        className="f-styles"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/JairPrada"
      >
        <GithubOutlined style={{ fontSize: "20px" }} />
        JairPrada
      </a>
      <a
        className="f-styles"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/jscalderon65"
      >
        <GithubOutlined style={{ fontSize: "20px" }} />
        SebastianCalderon
      </a>
      <a
        className="f-styles"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/GeralPinzon"
      >
        <GithubOutlined style={{ fontSize: "20px" }} />
        Geralpinzon
      </a>
    </div>
  );
};
export default NavBarDashBoard;
