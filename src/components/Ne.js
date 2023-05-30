import React from "react";
import Navigacija from "./Navigacija";
import scrolling_text_2 from "../img/scrolling_text_2.gif";
import ne_veselica from "../img/ne_veselica.png";

function Ne() {
  return (
    <div>
      <Navigacija />
      <div className='ne'>
        <div className='ne_top'>
          <img
            src={scrolling_text_2}
            alt='Scrolling Text'
            style={{ width: "100%" }}
          />
        </div>
        <div className='ne_bottom'>
          <img
            src={scrolling_text_2}
            alt='Scrolling Text'
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div>
        <img src={ne_veselica} alt='Ne Veselica' style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default Ne;
