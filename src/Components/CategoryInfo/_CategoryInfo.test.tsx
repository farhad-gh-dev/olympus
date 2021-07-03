import { render, screen } from "@testing-library/react";

import CategoryInfo from "./CategoryInfo";

test("category info render", () => {
  let categoryDummyData = {
    title: "origin",
    description: "origin category description...\nsecond line\n\nthird line",
  };
  render(
    <CategoryInfo
      categoryData={categoryDummyData}
      categoryImage={""}
      backHandler={() => {}}
    />
  );
});

describe("category info", () => {
  beforeEach(() => {
    let categoryDummyData = {
      title: "origin",
      description:
        "origin category description... \n second line \n\n third line",
    };
    render(
      <CategoryInfo
        categoryData={categoryDummyData}
        categoryImage={"imageDummySrc"}
        backHandler={() => {}}
      />
    );
  });

  test("title and description", () => {
    const titleElement = screen.getByText("origin");
    const descriptionElement = screen.getByText(
      /origin category description.../
    );

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test("description line break", async () => {
    const breakElements = await screen.findAllByTestId("paragraph-break");

    expect(breakElements).toHaveLength(4);
  });

  test("image src", () => {
    const imageElement = screen.getByAltText("category image");

    expect(imageElement).toHaveAttribute("src", "imageDummySrc");
  });
});
