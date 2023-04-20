import React from "react";
import p4 from "../images/13.jpg";
import p5 from "../images/14.jpg";
import p6 from "../images/15.jpg";
import p7 from "../images/16.jpg";
import p8 from "../images/17.jpg";

const Carosol = () => {
  return (
    <div>
      <div id="carosol">
        <div id="inner-carosol">
          <img src={p4} className="px-5 md:px-7" alt="" />
          <img src={p6} className="px-5 md:px-7" alt="" />
          <img src={p8} className="px-5 md:px-7" alt="" />
          <img src={p7} className="px-5 md:px-8" alt="" />
          <img src={p5} className="px-5 md:px-8" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carosol;
