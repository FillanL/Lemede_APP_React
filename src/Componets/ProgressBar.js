import React from "react";
import "../CssContainer/CampaignCard.css";

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <div
        className="percent"
        style={{
          width: props.precentage
        }}
      />
    </div>
  );
};
export default ProgressBar;
