import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kraviceAudio from "../audio/kravice_audio.mp3";
import kraviceVideo from "../video/kravice.mp4";
import Navigacija from "./Navigacija";

function Anketa() {
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handlePlayAudio = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      audio.play();
      setAudioPlaying(true);
    }
  };

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

      <audio>
        <source src={kraviceAudio} />
      </audio>

      {!audioPlaying && (
        <div className='audio-overlay'>
          <button onClick={handlePlayAudio}>Vstopi</button>
        </div>
      )}
    </div>
  );
}

export default Anketa;
