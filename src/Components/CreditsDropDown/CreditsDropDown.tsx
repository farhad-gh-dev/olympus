import React from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import "./credits-dropdown.scss";

interface dropdownItem {
  itemTitle: string;
  itemLink: { linkTitle: string; linkUrl: string };
}

interface Props {
  isActive?: boolean;
  dropdownTitle?: string;
  dropdownItems?: dropdownItem[];
  toggleHandler?: (targetCategory: string) => void;
}

const CreditsDropDown: React.FC<Props> = ({
  isActive = false,
  dropdownTitle = "dropdown",
  dropdownItems,
  toggleHandler = () => {},
}) => {
  return (
    <div
      className={`credits-dropdown${isActive ? " active" : ""}`}
      data-testid="dropdown-container"
    >
      <div className="dropdown-container">
        <button
          className="dropdown-button _custom-button"
          onClick={() => toggleHandler(dropdownTitle)}
        >
          <h5 className="dropdown-title">{dropdownTitle}</h5>
          <div className="dropdown-icon">{">"}</div>
        </button>
        <div className="dropdown-items-container">
          <ul>
            {dropdownItems
              ? dropdownItems.map((item) => {
                  return <DropDownItem {...item} />;
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditsDropDown;
