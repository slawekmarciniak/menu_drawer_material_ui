import NavMenu from "./components/Nav/NavMenu";
import { Articles, Contact, Home, Login } from "./components/Pages";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />

        <Content>
          <Switch>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;
