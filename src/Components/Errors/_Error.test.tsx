import { render, screen } from "@testing-library/react";

import GeneralError from "./GeneralError";

describe("General Error", () => {
  test("render", () => {
    render(<GeneralError />);
  });

  test("error is active", () => {
    render(<GeneralError show={true} />);
    const errorElement = screen.getByTestId("general-error-container");

    expect(errorElement).toHaveClass("show");
  });

  test("error delay", () => {
    render(<GeneralError show={true} delay={1000} />);
    const errorElement = screen.getByTestId("general-error-container");
    const errorElementStyle = window.getComputedStyle(errorElement);
    const errorGlowElement = screen.getByTestId("general-error-glow");
    const errorGlowElementStyle = window.getComputedStyle(errorGlowElement);

    expect(errorElementStyle.transitionDelay).toBe("1s");
    expect(errorGlowElementStyle.animationDelay).toBe("1s");
  });
});
