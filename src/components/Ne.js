import React from "react";
import Navigacija from "./Navigacija";
import scrolling_text_2 from "../img/scrolling_text_2.gif";
import Test from "./Webcam";
import video from "../video/veselica.mp4";

function Ne() {
  return (
    <div>
      <Navigacija />
      <div className='ne'>
        <img
          className='ne_top'
          src={scrolling_text_2}
          alt='Scrolling Text'
          style={{ width: "100%" }}
        />
        <img
          className='ne_bottom'
          src={scrolling_text_2}
          alt='Scrolling Text'
          style={{ width: "100%" }}
        />
      </div>

      <video
        autoPlay
        loop
        muted
        src={video}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Test />
      </div>
    </div>
  );
}

export default Ne;
