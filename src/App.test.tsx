import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

import App from "./App";

test("renders learn react link", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
});
