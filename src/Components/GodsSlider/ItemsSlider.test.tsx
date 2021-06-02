import { render, screen, fireEvent } from "@testing-library/react";

import ItemsSlider from "./ItemsSlider";

beforeEach(() => {
  render(
    <ItemsSlider
      sliderArr={[{ name: "athena" }, { name: "zeus" }, { name: "ares" }]}
    />
  );
});

test("slider items render correctly", () => {
  const athenaSlide = screen.getByText("athena");
  const zeusSlide = screen.getByText("zeus");
  const aresSlide = screen.getByText("ares");

  expect(athenaSlide).toBeInTheDocument();
  expect(zeusSlide).toBeInTheDocument();
  expect(aresSlide).toBeInTheDocument();

  expect(zeusSlide.closest("div")).toHaveClass("active");
  expect(athenaSlide.closest("div")).not.toHaveClass("active");
  expect(aresSlide.closest("div")).not.toHaveClass("active");
});

test("slider control buttons", () => {
  const prevSlideButton = screen.getByText("<");
  const nextSlideButton = screen.getByText(">");

  const athenaSlide = screen.getByText("athena");
  const zeusSlide = screen.getByText("zeus");
  const aresSlide = screen.getByText("ares");

  expect(prevSlideButton).toBeInTheDocument();
  expect(nextSlideButton).toBeInTheDocument();

  //next slide
  fireEvent.click(nextSlideButton);
  expect(aresSlide.closest("div")).toHaveClass("active");
  expect(zeusSlide.closest("div")).not.toHaveClass("active");
  expect(athenaSlide.closest("div")).not.toHaveClass("active");

  //click on next button on last slide
  fireEvent.click(nextSlideButton);
  expect(aresSlide.closest("div")).toHaveClass("active");
  expect(zeusSlide.closest("div")).not.toHaveClass("active");
  expect(athenaSlide.closest("div")).not.toHaveClass("active");

  //prev slide
  fireEvent.click(prevSlideButton);
  fireEvent.click(prevSlideButton);
  expect(athenaSlide.closest("div")).toHaveClass("active");
  expect(aresSlide.closest("div")).not.toHaveClass("active");
  expect(zeusSlide.closest("div")).not.toHaveClass("active");

  //click on prev button on first slide
  fireEvent.click(prevSlideButton);
  expect(athenaSlide.closest("div")).toHaveClass("active");
  expect(aresSlide.closest("div")).not.toHaveClass("active");
  expect(zeusSlide.closest("div")).not.toHaveClass("active");
});
