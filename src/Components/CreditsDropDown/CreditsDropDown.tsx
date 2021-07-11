import React from "react";

interface dropdownItem {
  itemTitle: string;
  itemLink: { linkTitle: string; linkUrl: string };
}

interface Props {
  isActive: boolean;
  dropdownTitle?: string;
  dropdownItems: dropdownItem[];
  toggleHandler: (targetCategory: string) => void;
}

const CreditsDropDown: React.FC<Props> = ({
  isActive = false,
  dropdownTitle = "dropdown",
  dropdownItems,
  toggleHandler,
}) => {
  return (
    <div className={`credits-dropdown${isActive ? " active" : ""}`}>
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
            {dropdownItems.map((item) => {
              return (
                <li>
                  <span className="dropdown-item-title">{item.itemTitle}:</span>
                  <a
                    href={item.itemLink.linkUrl}
                    className="dropdown-item-link"
                  >
                    {item.itemLink.linkTitle}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditsDropDown;
