import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navibar from "./components/Navbar";
import ErrorPage from "./components/Error";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Api from "./components/API";

const App = () => {
  return (
    <div className="todoapp stack-large">
      <Navibar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/api" component={Api} />
        <Route path="/themeSwitcher" component={ThemeSwitcher} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default App;
