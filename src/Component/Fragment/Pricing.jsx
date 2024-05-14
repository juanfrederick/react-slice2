import React, { useState } from "react";
import CheckButton from "../Element/CheckButton";

const Pricing = ({ isYearly, setIsYearly }) => {
  const [right, setRight] = useState(false);

  return (
    <div className="pricing">
      <h2>Plan & Pricing</h2>
      <div className="right-side-pricing">
        <h4>2 MONTHS FREE!</h4>
        <div className="check-button-container">
          <h3 className={!isYearly ? "selected" : undefined}>Monthly</h3>
          <CheckButton
            onclick={() => {
              setIsYearly(!isYearly);
            }}
            isYearly={isYearly}
          />
          <h3 className={isYearly ? "selected" : undefined}>Yearly</h3>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
