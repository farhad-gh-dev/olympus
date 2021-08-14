import { render, screen } from "@testing-library/react";
import CreditsDropDown from "./CreditsDropDown";

test("Credits dropdown render", () => {
  render(<CreditsDropDown />);
});

describe("Credits dropdown props", () => {
  test("dropdown is not active", () => {
    render(<CreditsDropDown isActive={false} />);
    const DropdownElement = screen.getByTestId("dropdown-container");

    expect(DropdownElement).not.toHaveClass("active");
  });

  test("dropdown is active", () => {
    render(<CreditsDropDown isActive={true} />);
    const DropdownElement = screen.getByTestId("dropdown-container");

    expect(DropdownElement).toHaveClass("active");
  });

  test("dropdown title", () => {
    render(<CreditsDropDown dropdownTitle={"my dd"} />);
    const DropdownTitle = screen.getByText("my dd");

    expect(DropdownTitle).toBeInTheDocument();
  });

  test("dropdown items", () => {
    render(
      <CreditsDropDown
        dropdownItems={[
          {
            itemTitle: "dummy item title",
            itemLink: {
              linkTitle: "dummy link title",
              linkUrl: "dummy link url",
            },
          },
        ]}
      />
    );
    const DropdownItemTitle = screen.getByText("dummy item title:");
    const DropdownItemLinkTitle = screen.getByText("dummy link title");
    const DropdownItemLinkElement = screen.getByTestId("dropdown-item-link");

    expect(DropdownItemTitle).toBeInTheDocument();
    expect(DropdownItemLinkTitle).toBeInTheDocument();
    expect(DropdownItemLinkElement).toHaveAttribute("href", "dummy link url");
  });
});
