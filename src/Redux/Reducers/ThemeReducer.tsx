import HermesImage from "../../assets/index-page/hermes.png";
import PoseidonImage from "../../assets/index-page/poseidon.png";
import AresImage from "../../assets/index-page/ares.png";

//navbar
import HomePageImage from "../../assets/home-page.png";
import AboutPageImage from "../../assets/about-page.png";
import CreditsPageImage from "../../assets/credits-page.png";

const InitialState = {
  indexPageBackgroundImages: [
    { src: HermesImage, alt: "hermes background" },
    { src: PoseidonImage, alt: "poseidon background" },
    { src: AresImage, alt: "ares background" },
  ],
  navbarLinks: [
    { url: "/", title: "home", linkImage: HomePageImage, imageAlt: "olympus" },
    {
      url: "/about",
      title: "about",
      linkImage: AboutPageImage,
      imageAlt: "statues",
    },
    {
      url: "/credits",
      title: "credits",
      linkImage: CreditsPageImage,
      imageAlt: "scroll",
    },
  ],
};

const ThemeReducer = (state = InitialState, action: any) => {
  return state;
};

export type ThemeReducerType = ReturnType<typeof ThemeReducer>;

export { ThemeReducer };
