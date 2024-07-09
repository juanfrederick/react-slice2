import React from "react";
import FeatureItem from "../Element/FeatureItem";

const Feature = () => {
  return (
    <div className="feature">
      <h1>Super Charge your work with add-ons</h1>
      <FeatureItem
        header="Collaborators"
        subHeader="Invite other users to specific projects for limited access and functionality."
      />
      <FeatureItem
        header="Partners"
        subHeader="Invite other users for full account and company management."
        pricing={"$9"}
      />
      <FeatureItem
        header="Bonsai Tax"
        subHeader="Track expenses, identify write-offs, and estimate quarterly taxexs easily."
        pricing={"$10"}
        more={true}
      />
    </div>
  );
};

export default Feature;
