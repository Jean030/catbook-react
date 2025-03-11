import React from "react";
import NavBar from "./modules/NavBar";
import Feed from "./pages/Feed";
// TODO (step5): import Outlet
import { Outlet } from "react-router-dom";

// To use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a class.
 */
const App = () => {
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar />
      <div className="App-container">
        <Outlet />
      </div>
    </>
  );
};

export default App;
