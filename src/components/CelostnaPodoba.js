import React from "react";
import "./main.css";

function CelostnaPodoba() {
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

      <div className='celostna_podoba'>
        <div className='celostna_podoba01'>
          <div className='celostna_podoba01tekst'>
            lajkajte naš facebook page!
          </div>
          <div className='celostna_podoba01img'>
            <img src='img/facebook_banner.png' alt='Facebook Banner' />
          </div>
        </div>
        <div className='celostna_podoba02'>
          <div className='celostna_podoba02img'>
            <img src='img/facebook_post.png' alt='Facebook Post' />
          </div>
        </div>
        <div className='celostna_podoba03'>
          <div className='celostna_podoba03tekst'>to je naš znak</div>
          <div className='celostna_podoba03img'>
            <img src='img/znak.gif' alt='Znak' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CelostnaPodoba;
