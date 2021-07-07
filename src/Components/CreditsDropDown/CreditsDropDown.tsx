import React from "react";

const CreditsDropDown: React.FC = () => {
  return (
    <div className="credits-dropdown">
      <div className="dropdown-container">
        <div className="dropdown-button">
          <h5 className="dropdown-title">3d models</h5>
          <div className="dropdown-icon">{">"}</div>
        </div>
        <div className="dropdown-items-container">
          <ul>
            <li>
              <span className="dropdown-item-title">zeus model:</span>
              <a href="/" className="dropdown-item-link">
                on sketchfab
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditsDropDown;
