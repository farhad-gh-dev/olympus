import { useState, useEffect } from "react";
import type { NavbarItem } from "./_NavbarTypes";

const useNavbar = (navbarItems: NavbarItem[]) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const [activeImage, setActiveImage] = useState<string>("");

  const navbarOpenHandler = () => {
    setIsActive(true);
  };

  const navbarCloseHandler = () => {
    setIsActive(false);
  };

  const mouseEnterLinkHandler = (title: string) => {
    setActiveImage(title);
  };

  const mouseLeaveLinkHandler = () => {
    setActiveImage(activeLink);
  };

  useEffect(() => {
    navbarItems.forEach((link) => {
      if (window.location.pathname === "/") {
        setActiveLink("home");
        setActiveImage("home");
      } else if (window.location.pathname.includes(link.title)) {
        setActiveLink(link.title);
        setActiveImage(link.title);
      } else {
        setActiveLink("");
      }
    });
  }, [navbarItems, window.location.pathname]);

  return {
    isActive,
    activeLink,
    activeImage,
    navbarOpenHandler,
    navbarCloseHandler,
    mouseEnterLinkHandler,
    mouseLeaveLinkHandler,
  };
};

export default useNavbar;
