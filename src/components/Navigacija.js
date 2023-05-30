import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navigacija = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className='NavBar'>
      <div className='Nav01'>
        analogne in digitalne
        <br />
        Hana Jelovšek
      </div>
      <div
        id='hid'
        className='Nav02'
        style={{
          display: isHidden ? "block" : "none",
        }}
      >
        <Link className='link' to='/'>
          anketa
        </Link>
        <br />
        <Link className='link' to='/CelostnaPodoba'>
          celostna podoba
        </Link>
        <br />
        <Link className='link' to='/animacija'>
          animacija
        </Link>
        <br />
        <Link className='link' to='/objekt'>
          objekt
        </Link>
        <br />
        <Link className='link' to='/knjiga_pohval_in_pritožb'>
          knjiga pohval in pritožb
        </Link>
      </div>
      <div onClick={() => setIsHidden(!isHidden)} className='Nav03'>
        meni
      </div>
    </div>
  );
};

export default Navigacija;
