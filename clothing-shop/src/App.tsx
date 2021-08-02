import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/homepage/hompage.component";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
