import React from "react";
import FooterItem from "../Element/FooterItem";

const Footer = () => {
  const productArray = [
    { href: "#", value: "Proposals" },
    { href: "#", value: "Contracts" },
    { href: "#", value: "Invoicing" },
    { href: "#", value: "Client CRM" },
    { href: "#", value: "Time Tracking" },
    { href: "#", value: "Task Tracking" },
    { href: "#", value: "Forms" },
    { href: "#", value: "Accounting" },
    { href: "#", value: "Bonsai Tax" },
    { href: "#", value: "Bonsai Cash" },
  ];

  const resourceArray = [
    { href: "#", value: "Freelance Resources" },
    { href: "#", value: "Freelance Blog by Bonsai" },
    { href: "#", value: "How to Write a Contract" },
    { href: "#", value: "Online Singature Maker" },
    { href: "#", value: "Self Employed Taxes Hub" },
    { href: "#", value: "Self Employed Tax Calculator" },
    { href: "#", value: "Self Employed Tax Deductions" },
  ];

  const bonsaiArray = [
    { href: "#", value: "About" },
    { href: "#", value: "Careers" },
    { href: "#", value: "Support" },
    { href: "#", value: "Linkedin" },
    { href: "#", value: "Twitter" },
    { href: "#", value: "Privacy Policy" },
    { href: "#", value: "Legal" },
  ];

  return (
    <div className="footer-container">
      <FooterItem header="PRODUCT" child={productArray} />
      <FooterItem header="FREE RESOURCES" child={resourceArray} />
      <FooterItem header="BONSAI" child={bonsaiArray} />
    </div>
  );
};

export default Footer;
