import React from "react";
import type { NavbarItem } from "../_NavbarTypes";
import "./navbar-links.scss";

interface Props {
  navbarItems: NavbarItem[];
  activeLink: string;
  mouseEnterLinkHandler: (title: string) => void;
  mouseLeaveLinkHandler: () => void;
}

const NavbarLinks: React.FC<Props> = ({
  navbarItems,
  activeLink,
  mouseEnterLinkHandler,
  mouseLeaveLinkHandler,
}) => {
  return (
    <ul
      className="navbar-links _text-center"
      onMouseLeave={mouseLeaveLinkHandler}
      data-testid="navbar-links-ul"
    >
      {navbarItems.map((link) => {
        return (
          <li
            key={link.title}
            className={`navbar-item${
              link.title === activeLink ? " active" : ""
            }`}
            onMouseEnter={() => mouseEnterLinkHandler(link.title)}
          >
            <a className="navbar-link" href={link.url}>
              {link.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
