import React from "react";
import type { NavbarItem } from "../_NavbarTypes";

interface Props {
  navbarItems: NavbarItem[];
  activeImage: string;
}

const NavbarImages: React.FC<Props> = ({ navbarItems, activeImage }) => {
  return (
    <div className="navbar-images _position-relative">
      {navbarItems.map((link) => {
        return (
          <img
            key={link.imageAlt}
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
