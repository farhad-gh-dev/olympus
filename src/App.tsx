import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndexPage from "./Pages/IndexPage";
import GodTemplate from "./Pages/GodTemplate";

function App() {
  return (
    <Router>
      <div className="App _position-relative">
        <Switch>
          <Route path="/:godName">
            <GodTemplate />
          </Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
