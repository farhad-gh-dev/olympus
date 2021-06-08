import IndexPage from "./Pages/IndexPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./Redux/Reducers/index";

import Navbar from "./Components/Navbar/Navbar";

function App() {
  const { navbarLinks } = useSelector((store: RootState) => store.ThemeReducer);

  return (
    <Router>
      <div className="App _position-relative">
        <Navbar links={navbarLinks} />

        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
