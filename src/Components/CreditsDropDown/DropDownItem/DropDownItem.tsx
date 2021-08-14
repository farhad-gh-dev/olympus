import React from "react";
import "./drop-down-item.scss";

interface Props {
  itemTitle?: string;
  itemLink?: {
    linkTitle: string;
    linkUrl: string;
  };
}

const DropDownItem: React.FC<Props> = ({
  itemTitle = "item title",
  itemLink,
}) => {
  return (
    <li className="dropdown-item">
      <span className="dropdown-item-title">{itemTitle}:</span>
      {itemLink ? (
        <a
          href={itemLink.linkUrl}
          className="dropdown-item-link"
          target="_blank"
          rel="noreferrer"
          data-testid="dropdown-item-link"
        >
          {itemLink.linkTitle}
        </a>
      ) : null}
    </li>
  );
};

export default DropDownItem;
