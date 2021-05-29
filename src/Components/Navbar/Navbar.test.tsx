import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../Redux/Reducers/index";

import Navbar from "./Navbar";

beforeEach(() => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
});

describe("navbar links", () => {
  //open navbar
  beforeEach(() => {
    const navbarOpenButton = screen.getByTestId("navbar-button");
    fireEvent.click(navbarOpenButton);

    expect(screen.getByTestId("navbar-window")).toHaveClass("active");

    const navbarCloseButton = screen.getByTestId("navbar-close-button");
    fireEvent.click(navbarCloseButton);
  });

  test("close navbar", () => {
    const navbarOpenButton = screen.getByTestId("navbar-button");
    fireEvent.click(navbarOpenButton);

    expect(screen.getByTestId("navbar-window")).toHaveClass("active");

    const navbarCloseButton = screen.getByTestId("navbar-close-button");
    fireEvent.click(navbarCloseButton);

    expect(screen.getByTestId("navbar-window")).not.toHaveClass("active");
  });

  test("links render", () => {
    const homeLink = screen.getByText("home");
    const aboutLink = screen.getByText("about");
    const creditsLink = screen.getByText("credits");

    //check if links are in render
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(creditsLink).toBeInTheDocument();

    //check if links have correct href value
    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(creditsLink).toHaveAttribute("href", "/credits");
  });
});

describe("navbar images", () => {
  //open navbar
  beforeEach(() => {
    const navbarOpenButton = screen.getByTestId("navbar-button");
    fireEvent.click(navbarOpenButton);

    expect(screen.getByTestId("navbar-window")).toHaveClass("active");

    const navbarCloseButton = screen.getByTestId("navbar-close-button");
    fireEvent.click(navbarCloseButton);
  });

  test("images render", () => {
    const homeImage = screen.getByAltText("olympus");
    const aboutImage = screen.getByAltText("statues");
    const creditsImage = screen.getByAltText("scroll");

    expect(homeImage).toBeInTheDocument();
    expect(aboutImage).toBeInTheDocument();
    expect(creditsImage).toBeInTheDocument();
  });

  test("correct image is displaying", () => {
    const linksUl = screen.getByTestId("navbar-links-ul");
    const aboutLink = screen.getByText("about");
    const creditsLink = screen.getByText("credits");

    const homeImage = screen.getByAltText("olympus");
    const aboutImage = screen.getByAltText("statues");
    const creditsImage = screen.getByAltText("scroll");

    expect(homeImage).toHaveClass("active");
    expect(aboutImage).not.toHaveClass("active");
    expect(creditsImage).not.toHaveClass("active");

    fireEvent.mouseEnter(aboutLink);
    expect(homeImage).not.toHaveClass("active");
    expect(aboutImage).toHaveClass("active");
    expect(creditsImage).not.toHaveClass("active");

    fireEvent.mouseEnter(creditsLink);
    expect(homeImage).not.toHaveClass("active");
    expect(aboutImage).not.toHaveClass("active");
    expect(creditsImage).toHaveClass("active");

    fireEvent.mouseLeave(linksUl);
    expect(homeImage).toHaveClass("active");
    expect(aboutImage).not.toHaveClass("active");
    expect(creditsImage).not.toHaveClass("active");
  });
});
