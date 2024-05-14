import { useEffect, useState } from "react";
import { BiJoystick } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function Navbar({ hambActive, setHambActive }) {
  const [reverseActice, setReverseActive] = useState(false);

  useEffect(() => {
    if (hambActive) {
      setReverseActive(true);
    }
  }, [hambActive]);

  return (
    <div>
      <div className="navbar">
        <div className="navbar_logo">
          <BiJoystick className="logo" />
          <h1>Bonsai</h1>
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
