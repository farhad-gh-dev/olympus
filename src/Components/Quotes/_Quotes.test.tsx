import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Quotes from "./Quotes";

beforeEach(() => {
  render(
    <Quotes
      quotesArr={[
        { quote: "", quotee: "john" },
        { quote: "", quotee: "rose" },
        { quote: "", quotee: "harry" },
      ]}
    />
  );
});

test("quotes are in document", async () => {
  const johnQuote = screen.getByText("john");
  const roseQuote = screen.getByText("rose");
  const harryQuote = screen.getByText("harry");

  expect(johnQuote).toBeInTheDocument();
  expect(roseQuote).toBeInTheDocument();
  expect(harryQuote).toBeInTheDocument();

  expect(johnQuote.parentElement).toHaveClass("active");

  await waitFor(() =>
    setTimeout(() => {
      expect(roseQuote.parentElement).toHaveClass("active");
    }, 7000)
  );
});
