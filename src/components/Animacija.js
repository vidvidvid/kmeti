import React from "react";
import "./main.css";

function Animacija() {
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

      <div className='animacija'>
        <video width='100%' height='100%' autoPlay muted loop>
          <source src='video/animacija.mp4' />
        </video>
      </div>
    </div>
  );
}

export default Animacija;
