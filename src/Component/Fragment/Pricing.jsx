import React, { useState } from "react";
import CheckButton from "../Element/CheckButton";

const Pricing = ({ isYearly, setIsYearly }) => {
  return (
    <div className="pricing">
      <h2>Plan & Pricing</h2>
      <div className="right-side-pricing">
        <h4>2 MONTHS FREE!</h4>
        <div className="check-button-container">
          <h3
            className={!isYearly ? "selected" : undefined}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </h3>
          <CheckButton
            onclick={() => {
              setIsYearly(!isYearly);
            }}
            right={isYearly}
          />
          <h3
            className={isYearly ? "selected" : undefined}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
