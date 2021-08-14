import React from "react";
import "./general-error.scss";

interface Props {
  show?: boolean;
  delay?: number;
}

const GeneralError: React.FC<Props> = ({ show = false, delay = 0 }) => {
  return (
    <div
      className={`general-error${show ? " show" : " hide"}`}
      style={{ transitionDelay: `${delay / 1000}s` }}
      data-testid="general-error-container"
    >
      {show && (
        <div
          className="error-glow"
          style={{ animationDelay: `${delay / 1000}s` }}
          data-testid="general-error-glow"
        ></div>
      )}
      <span>something went wrong</span>
    </div>
  );
};

export default GeneralError;
