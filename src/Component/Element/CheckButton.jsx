import React from "react";

function CheckButton({ onclick, right }) {
  return (
    <div
      className={`check-button ${right ? "right" : undefined}`}
      onClick={onclick}
    >
      <div className="circle"></div>
    </div>
  );
}

export default CheckButton;
