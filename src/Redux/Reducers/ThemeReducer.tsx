import HermesImage from "../../assets/index-page/hermes.png";
import PoseidonImage from "../../assets/index-page/poseidon.png";
import AresImage from "../../assets/index-page/ares.png";

const InitialState = {
  indexPageBackgroundImages: [
    { src: HermesImage, alt: "hermes background" },
    { src: PoseidonImage, alt: "poseidon background" },
    { src: AresImage, alt: "ares background" },
  ],
};

const ThemeReducer = (state = InitialState, action: any) => {
  return state;
};

export type ThemeReducerType = ReturnType<typeof ThemeReducer>;

export { ThemeReducer };
