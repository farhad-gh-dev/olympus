import React from "react";
import { v4 as uuid } from "uuid";
import type { Link } from "../_NavbarTypes";

interface Props {
  navbarLinks: Link[];
  activeLink: string;
  mouseEnterLinkHandler: (title: string) => void;
  mouseLeaveLinkHandler: () => void;
}

const NavbarLinks: React.FC<Props> = ({
  navbarLinks,
  activeLink,
  mouseEnterLinkHandler,
  mouseLeaveLinkHandler,
}) => {
  return (
    <ul
      className="navbar-links _text-center"
      onMouseLeave={mouseLeaveLinkHandler}
    >
      {navbarLinks.map((link) => {
        return (
          <li
            key={uuid()}
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
