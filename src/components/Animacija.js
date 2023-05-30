import React from "react";
import Navigacija from "./Navigacija";
import animacija from "../video/animacija.mp4";

function Animacija() {
  return (
    <div>
      <Navigacija />

      <div className='animacija'>
        <video width='100%' height='100%' autoPlay muted loop>
          <source src={animacija} />
        </video>
      </div>
    </div>
  );
}

export default Animacija;
