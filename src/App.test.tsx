import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/Reducers/index";

import App from "./App";

test("renders learn react link", () => {
  const store = createStore(rootReducer);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
