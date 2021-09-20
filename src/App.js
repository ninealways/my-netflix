import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home.page";

import "./App.scss";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
