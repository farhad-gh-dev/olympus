import HermesImage from "../../assets/index-page/hermes.png";
import PoseidonImage from "../../assets/index-page/poseidon.png";
import AresImage from "../../assets/index-page/ares.png";

//navbar
import HomePageImage from "../../assets/home-page.png";
import AboutPageImage from "../../assets/about-page.png";
import CreditsPageImage from "../../assets/credits-page.png";

//credits page
import ArticlesImage from "../../assets/credits-page/articles.png";
import ModelsImage from "../../assets/credits-page/3d-models.png";
import ImagesImage from "../../assets/credits-page/images.png";

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
  creditsData: [
    {
      categoryName: "articles",
      categoryImage: ArticlesImage,
      categoryItems: [
        {
          itemTitle: "Zeus main",
          itemLink: {
            linkTitle: "on wikipedia",
            linkUrl: "https://en.wikipedia.org/wiki/Zeus",
          },
        },
        {
          itemTitle: "zeus supplementary",
          itemLink: {
            linkTitle: "on greekmythology",
            linkUrl: "https://www.greekmythology.com/Olympians/Zeus/zeus.html",
          },
        },
        {
          itemTitle: "zeus myths",
          itemLink: {
            linkTitle: "on learnodo-newtonic",
            linkUrl: "https://learnodo-newtonic.com/zeus-myths",
          },
        },
        {
          itemTitle: "athena main",
          itemLink: {
            linkTitle: "on wikipedia",
            linkUrl: "https://en.wikipedia.org/wiki/Athena",
          },
        },
        {
          itemTitle: "athena supplementary",
          itemLink: {
            linkTitle: "on greekmythology",
            linkUrl:
              "https://www.greekmythology.com/Olympians/Athena/athena.html",
          },
        },
        {
          itemTitle: "athena myths",
          itemLink: {
            linkTitle: "on learnodo-newtonic",
            linkUrl: "https://learnodo-newtonic.com/athena-myths",
          },
        },
        {
          itemTitle: "ares main",
          itemLink: {
            linkTitle: "on wikipedia",
            linkUrl: "https://en.wikipedia.org/wiki/Ares",
          },
        },
        {
          itemTitle: "ares supplementary",
          itemLink: {
            linkTitle: "on greekmythology",
            linkUrl: "https://www.greekmythology.com/Olympians/Aris/aris.html",
          },
        },
        {
          itemTitle: "ares myths",
          itemLink: {
            linkTitle: "on learnodo-newtonic",
            linkUrl: "https://learnodo-newtonic.com/ares-myths",
          },
        },
      ],
    },
    {
      categoryName: "3d models",
      categoryImage: ModelsImage,
      categoryItems: [
        {
          itemTitle: "zeus statue",
          itemLink: {
            linkTitle: "on sketchfab",
            linkUrl: "https://sketchfab.com/jmch",
          },
        },
        {
          itemTitle: "athena statue",
          itemLink: {
            linkTitle: "on sketchfab",
            linkUrl: "https://sketchfab.com/antikensammlung_kiel",
          },
        },
        {
          itemTitle: "ares statue",
          itemLink: {
            linkTitle: "on sketchfab",
            linkUrl: "https://sketchfab.com/geoffreymarchal",
          },
        },
        {
          itemTitle: "navbar about page scroll",
          itemLink: {
            linkTitle: "on sketchfab",
            linkUrl: "https://sketchfab.com/WirtualneMuzeaMalopolski",
          },
        },
        {
          itemTitle: "navbar button shield",
          itemLink: {
            linkTitle: "on sketchfab",
            linkUrl:
              "https://sketchfab.com/3d-models/apollos-shield-114a2f315e734ba1b7f3c3b75fcb34fa",
          },
        },
        {
          itemTitle: "navbar button spear",
          itemLink: {
            linkTitle: "on sketchfab",
            linkUrl:
              "https://sketchfab.com/3d-models/dwarven-spear-elder-scrolls-fan-art-7b330ddfaaca4961ae41cccff7ac8dd4",
          },
        },
      ],
    },
    {
      categoryName: "images",
      categoryImage: ImagesImage,
      categoryItems: [
        {
          itemTitle: "hermes on index-page",
          itemLink: {
            linkTitle: "on saatchiart",
            linkUrl:
              "https://www.saatchiart.com/art/Photography-Mercury-and-Psyche-Limited-Edition-1-of-50/844910/3925534/view",
          },
        },
        {
          itemTitle: "poseidon on index-page",
          itemLink: {
            linkTitle: "on collections.lacma",
            linkUrl: "https://collections.lacma.org/node/241134",
          },
        },
        {
          itemTitle: "ares on index-page",
          itemLink: {
            linkTitle: "on worldhistory",
            linkUrl:
              "https://www.worldhistory.org/image/4440/ares---god-of-war/",
          },
        },
      ],
    },
  ],
};

const ThemeReducer = (state = InitialState, action: any) => {
  return state;
};

export type ThemeReducerType = ReturnType<typeof ThemeReducer>;

export { ThemeReducer };
