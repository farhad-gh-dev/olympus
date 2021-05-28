import React from "react";
import { v4 as uuid } from "uuid";
import type { Link } from "../_NavbarTypes";

interface Props {
  navbarLinks: Link[];
  activeImage: string;
}

const NavbarImages: React.FC<Props> = ({ navbarLinks, activeImage }) => {
  return (
    <div className={`navbar-images _position-relative _text-right`}>
      {navbarLinks.map((link) => {
        return (
          <img
            key={uuid()}
            src={link.linkImage}
            alt={link.imageAlt}
            className={`${link.title === activeImage ? "active" : ""}`}
          />
        );
      })}
    </div>
  );
};

export default NavbarImages;
