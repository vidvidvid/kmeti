import React from "react";
import Navigacija from "./Navigacija";
import scrolling_text from "../img/scrolling_text.gif";
import da_protest from "../img/da_protest.png";

function Da() {
  return (
    <div>
      <Navigacija />

      <div className='da'>
        <div className='da_top'>
          <img
            src={scrolling_text}
            alt='Scrolling Text'
            style={{ width: "100%" }}
          />
        </div>
        <div className='da_bottom'>
          <img
            src={scrolling_text}
            alt='Scrolling Text'
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div>
        <img src={da_protest} alt='DA Protest' style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default Da;
