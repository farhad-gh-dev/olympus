import { render, screen } from "@testing-library/react";

import Category from "./Category";

test("component render test", () => {
  render(<Category />);
});

let dummyProps = {
  categoryData: {
    title: "cat title",
    description: "",
  },
  categoryIcon: "cat icon",
  subCategory: false,
  disabled: false,
  termToFilter: "",
  clickHandler: (categoryName: any) => categoryName,
};

describe("category Props", () => {
  test("title", () => {
    render(<Category categoryData={{ title: "cat title", description: "" }} />);
    const titleElement = screen.getByText("cat title");

    expect(titleElement).toBeInTheDocument();
  });

  test("category class", () => {
    render(<Category />);
    const categoryElement = screen.getByTestId("category-container");

    expect(categoryElement).toHaveClass("category");
  });

  test("sub-category class", () => {
    render(<Category subCategory={true} />);
    const categoryElement = screen.getByTestId("category-container");

    expect(categoryElement).toHaveClass("sub-category");
  });

  test("disabled category", () => {
    render(<Category disabled={true} />);
    const categoryButton = screen.getByTestId("category-btn");

    expect(categoryButton).toHaveClass("disabled");
  });
});
