import React from "react";

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
