import React from "react";
import { NavbarItem } from "./_NavbarTypes";
import useNavbar from "./useNavbar";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarImages from "./NavbarImages/NavbarImages";
import ShieldImage from "../../assets/shield.png";
import SpearImage from "../../assets/spear.png";
import "./navbar.scss";

interface Props {
  links: NavbarItem[];
}

const Navbar: React.FC<Props> = ({ links }) => {
  const {
    isActive,
    activeLink,
    activeImage,
    navbarOpenHandler,
    navbarCloseHandler,
    mouseEnterLinkHandler,
    mouseLeaveLinkHandler,
  } = useNavbar(links);

  return (
    <nav className="navbar">
      <button
        className="navbar-button _custom-button _position-absolute"
        onClick={navbarOpenHandler}
        data-testid="navbar-button"
      >
        <img src={ShieldImage} alt="shield" className="shield-image" />
        <img
          src={SpearImage}
          alt="spear"
          className="spear-image _position-absolute"
        />
      </button>

      <div
        className={`navbar-window _cover-page${isActive ? " active" : ""}`}
        data-testid="navbar-window"
      >
        <button
          className="navbar-close-button _custom-button"
          onClick={navbarCloseHandler}
          data-testid="navbar-close-button"
        >
          <div>/</div>
          <div>\</div>
        </button>
        <div className="navbar-items-container">
          <div className="navbar-images-container">
            <NavbarImages navbarItems={links} activeImage={activeImage} />
          </div>
          <div
            className="navbar-links-container _d-flex _align-items-center _justify-content-center"
            data-testid={"navbar-links-container"}
          >
            <NavbarLinks
              navbarItems={links}
              activeLink={activeLink}
              mouseEnterLinkHandler={mouseEnterLinkHandler}
              mouseLeaveLinkHandler={mouseLeaveLinkHandler}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
