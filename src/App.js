import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Navbar, BookForm, Register } from "./components";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={BookForm} />

        {/* <Navbar /> */}
        {/* <BookForm /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
