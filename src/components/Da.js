import React from "react";
import Navigacija from "./Navigacija";
import scrolling_text from "../img/scrolling_text.gif";
import Test from "./Webcam";
import video from "../video/kmetje.mp4";

function Da() {
  return (
    <div>
      <Navigacija />

      <div className='da'>
        <img
          className='da_top'
          src={scrolling_text}
          alt='Scrolling Text'
          style={{ width: "100%" }}
        />
        <img
          className='da_bottom'
          src={scrolling_text}
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

export default Da;
