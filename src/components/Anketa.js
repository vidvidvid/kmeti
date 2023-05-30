import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import kraviceAudio from "../audio/kravice_audio.mp3";
import kraviceVideo from "../video/kravice.mp4";
import Navigacija from "./Navigacija";

function Anketa() {
  return (
    <div>
      <Navigacija />

      <div className='anketa'>
        <div className='anketa01'>
          reši anketo: <br />
          protest kmetov s traktorji pred parlamentom
        </div>
        <div className='anketa02'>
          <Link className='link2' to='da'>
            da
          </Link>
        </div>
        <div className='anketa03'>
          <Link className='link2' to='ne'>
            ne
          </Link>
        </div>
      </div>

      <div className='kravice_video'>
        <video width='100%' height='100%' autoPlay loop muted>
          <source src={kraviceVideo} />
        </video>
      </div>

      <audio autoPlay>
        <source src={kraviceAudio} />
      </audio>
    </div>
  );
}

export default Anketa;
