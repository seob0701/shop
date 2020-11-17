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
      <h1><a href="/" style={{color:'black'}}>SEOB</a></h1>
      <ul className="nav_list">
        <li>
          <a href="/signin">
            <b>Login</b>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
