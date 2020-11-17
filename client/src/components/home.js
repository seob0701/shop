import React from "react";
import { Aside } from "../components/index";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <Aside />
      </aside>
      <section style={{flex:"1" ,marginLeft:'15px'}}>home</section>
    </div>
  );
};

export default Home;
