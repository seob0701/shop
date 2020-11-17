import React from 'react'
import { Aside } from "../components/index";

const Notice = () => {
  return (
    
    <div style={{ display: "flex" }}>
      <aside>
        <Aside />
      </aside>
      <section style={{flex:"1" ,marginLeft:'15px'}}>notice</section>
    </div>
  )
}

export default Notice
