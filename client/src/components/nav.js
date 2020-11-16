import React from "react";

const Nav = () => {
  return (
    <div
      className="nav"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 50px",
      }}
    >
      <h1>SEOB</h1>
      <ul className="nav_list">
        <li>
          <a href="/login">
            <span>Login</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
