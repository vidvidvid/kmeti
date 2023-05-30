import React from "react";
import kraviceAudio from "./audio/kravice_audio.mp3";
import kraviceVideo from "./video/kravice.mp4";

function App() {
  const hideElement = () => {
    const object = document.getElementById("hid");
    console.log("WAU");
    if (object.style.display === "none") {
      object.style.display = "block";
    } else {
      object.style.display = "none";
    }
  };

  return (
    <div>
      <div className='NavBar'>
        <div className='Nav01'>
          analogne in digitalne
          <br />
          Hana Jelovšek
        </div>
        <div id='hid' className='Nav02'>
          <a className='link' href='index.html'>
            anketa
          </a>
          <br />
          <a className='link' href='CelostnaPodoba.html'>
            celostna podoba
          </a>
          <br />
          <a className='link' href='animacija.html'>
            animacija
          </a>
          <br />
          <a className='link' href='objekt.html'>
            objekt
          </a>
          <br />
          <a className='link' href='knjiga_pohval_in_pritožb.html'>
            knjiga pohval in pritožb
          </a>
        </div>
        <div onClick={hideElement} className='Nav03'>
          meni
        </div>
      </div>

      <div className='anketa'>
        <div className='anketa01'>
          reši anketo: <br />
          protest kmetov s traktorji pred parlamentom
        </div>
        <div className='anketa02'>
          <a className='link2' href='da.html'>
            da
          </a>
        </div>
        <div className='anketa03'>
          <a className='link2' href='ne.html'>
            ne
          </a>
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

export default App;
