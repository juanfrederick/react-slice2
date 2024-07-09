import React from "react";

const FeatureItem = ({ header, subHeader, pricing, more }) => {
  return (
    <div className="feature-item">
      <div className="header">
        <h2>{header}</h2>
        <p>{subHeader}</p>
        {more && <a href="#">Learn More</a>}
      </div>
      <div className="feature-price">
        {pricing ? (
          <div>
            <h1>{pricing}</h1>
            <p>/MONTH</p>
          </div>
        ) : (
          <h1>Free</h1>
        )}
      </div>
    </div>
  );
};

export default FeatureItem;
