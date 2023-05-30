import React from "react";
import Navigacija from "./Navigacija";
import komentarji from "../img/komentarji.png";

function KnjigaPohvalInPritozb() {
  return (
    <div>
      <Navigacija />

      <div className='knjiga_pohval_in_pritožb'>
        <img src={komentarji} alt='Knjiga pohval in pritožb' />
      </div>
    </div>
  );
}

export default KnjigaPohvalInPritozb;
