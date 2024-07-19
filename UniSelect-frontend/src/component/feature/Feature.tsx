import React from "react";
import "./Feature.css";
import suza from "../../pic/suza.jpeg";
import uniDar from "../../pic/uniDar.jpeg";
import kiu from "../../pic/kiu.jpg";

const Feature = () => {
  return (
    // <div className="row">
    //   <div className="column">
    //     <h2>State University Of Zanzibar</h2>
    //     <div className="Pic">
    //       <img src={suza} alt="suza" />
    //     </div>
    //   </div>
    //   <div className="column">
    //     <h2>University Of Dar es salaam</h2>
    //     <div className="Pic">
    //       <img src={uniDar} alt="uni" />
    //     </div>
    //   </div>
    //   <div className="column">
    //     <h2>Kampala International University</h2>
    //     <div className="Pic">
    //       <img src={kiu} alt="kiu" />
    //     </div>
    //   </div>
    // </div>
    <div className="row">
      <div className="column">
        <img src={suza} alt="suza" />
      </div>
      <div className="column">
        <img src={uniDar} alt="uni" />
      </div>
      <div className="column">
        <img src={kiu} alt="kiu" />
      </div>
    </div>
  );
};

export default Feature;
