import { useEffect, useState } from "react";
import { BiJoystick } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function Navbar({ hambActive, setHambActive }) {
  const [reverseActice, setReverseActive] = useState(false);
  const [invi, setInvi] = useState(true);

  useEffect(() => {
    if (hambActive) {
      setReverseActive(true);
    }
  }, [hambActive]);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.scrollY > 0) {
        setInvi(false);
      } else if (window.scrollY === 0) {
        setInvi(true);
      }
    });
  }, [invi]);

  return (
    <div>
      <div className={`navbar ${invi ? "navbar-invi" : "navbar-white"}`}>
        <div className="navbar_logo">
          <BiJoystick className="logo" />
          <h1>Bonsai</h1>
        </div>
        <div className="navbar-item">
          <p>Product</p>
          <p>Templates</p>
          <p>Pricing</p>
          <p>Reviews</p>
        </div>
        <div className="navbar-button-container">
          <button className="login">Login</button>
          <button className="free">Start Free</button>
        </div>
      </div>
      <div
        className="navbar_hamb"
        onClick={() => {
          setHambActive(!hambActive);
        }}
      >
        <div
          className={
            hambActive ? "first" : reverseActice ? "first-reverse" : undefined
          }
        ></div>
        <div
          className={
            hambActive ? "second" : reverseActice ? "second-reverse" : undefined
          }
        ></div>
        <div
          className={
            hambActive ? "third" : reverseActice ? "third-reverse" : undefined
          }
        ></div>
      </div>
    </div>
  );
}

export default Navbar;
