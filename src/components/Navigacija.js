import { Link } from "react-router-dom";

const Navigacija = () => {
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
    <div className='NavBar'>
      <div className='Nav01'>
        analogne in digitalne
        <br />
        Hana Jelovšek
      </div>
      <div id='hid' className='Nav02'>
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
      <div onClick={hideElement} className='Nav03'>
        meni
      </div>
    </div>
  );
};

export default Navigacija;
