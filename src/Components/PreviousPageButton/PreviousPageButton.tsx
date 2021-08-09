import React from "react";
import "./previous-page-button.scss";

const PreviousPageButton: React.FC = () => {
  return (
    <div className="previous-page-button">
      <a href="/" className="previous-page-link _custom-button">
        <span>{"<"}</span>
      </a>
    </div>
  );
};

export default PreviousPageButton;
