import React from "react";
import type { NavbarItem } from "../_NavbarTypes";
import "./navbar-images.scss";

interface Props {
  navbarItems: NavbarItem[];
  activeImage: string;
}

const NavbarImages: React.FC<Props> = ({ navbarItems, activeImage }) => {
  return (
    <div className="navbar-images _position-relative">
      {activeImage ? (
        navbarItems.map((link) => {
          return (
            <img
              key={link.imageAlt}
              src={link.linkImage}
              alt={link.imageAlt}
              className={`${link.title === activeImage ? "active" : ""}`}
            />
          );
        })
      ) : (
        <img
          key={navbarItems[0].imageAlt}
          src={navbarItems[0].linkImage}
          alt={navbarItems[0].imageAlt}
          className="active"
        />
      )}
    </div>
  );
};

export default NavbarImages;
