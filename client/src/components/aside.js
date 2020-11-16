import React from "react";
import profile from "../images/profile.jpg";
import { RiInstagramFill, RiGithubFill } from "react-icons/ri";

const Aside = () => {
  return (
    <div style={{ fontFamily: "Architects Daughter, cursive" }}>
      <img src={profile} alt="" style={{ width: "250px", height: "250px" }} />
      <section className="intro">
        <b>Shim Yu Seob</b>
        <p>this is my Portfolio</p>
        <a href="https://www.instagram.com/shimyuseob/" target="_blank">
          <RiInstagramFill />
        </a>
      </section>
    </div>
  );
};

export default Aside;
