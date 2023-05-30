import React from "react";
import Navigacija from "./Navigacija";
import facebook_banner from "../img/facebook_banner.png";
import facebook_post from "../img/facebook_post.png";
import znak from "../img/znak.gif";

function CelostnaPodoba() {
  return (
    <div>
      <Navigacija />

      <div className='celostna_podoba'>
        <div className='celostna_podoba01'>
          <div className='celostna_podoba01tekst'>
            lajkajte naš facebook page!
          </div>
          <div className='celostna_podoba01img'>
            <img src={facebook_banner} alt='Facebook Banner' />
          </div>
        </div>
        <div className='celostna_podoba02'>
          <div className='celostna_podoba02img'>
            <img src={facebook_post} alt='Facebook Post' />
          </div>
        </div>
        <div className='celostna_podoba03'>
          <div className='celostna_podoba03tekst'>to je naš znak</div>
          <div className='celostna_podoba03img'>
            <img src={znak} alt='Znak' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CelostnaPodoba;
