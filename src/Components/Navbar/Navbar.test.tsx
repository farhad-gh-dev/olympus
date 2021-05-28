import { render, screen, fireEvent } from "@testing-library/react";
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

test("navbar open and close", () => {
  const navbarOpenButton = screen.getByTestId("navbar-button");
  fireEvent.click(navbarOpenButton);

  expect(screen.getByTestId("navbar-window")).toHaveClass("active");

  const navbarCloseButton = screen.getByTestId("navbar-close-button");
  fireEvent.click(navbarCloseButton);

  expect(screen.getByTestId("navbar-window")).not.toHaveClass("active");
});
