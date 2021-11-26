import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import BookForm from "./components/BookForm/BookForm";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/register" component={Register} /> */}
        <Route exact path="/home" component={BookForm} />

        {/* <Navbar /> */}
        {/* <BookForm /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
