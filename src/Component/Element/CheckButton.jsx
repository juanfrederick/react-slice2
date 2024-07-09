import React from "react";

function CheckButton({ onclick, right }) {
  return (
    <div
      className={`check-button ${right ? "right" : undefined}`}
      onClick={onclick}
    >
      <div className={`circle ${right ? "right" : undefined}`}></div>
    </div>
  );
}

export default CheckButton;
