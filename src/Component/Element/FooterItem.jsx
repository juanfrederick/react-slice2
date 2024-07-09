import React from "react";

const FooterItem = ({ header, child }) => {
  return (
    <div className="footer-item">
      <h2>{header}</h2>
      <div className="list-container">
        {child.map((val, index) => {
          return (
            <a href={val.href} key={index}>
              {val.value}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterItem;
