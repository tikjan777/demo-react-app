import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Summ from "./Component/Example.js";
import { multiply, sayHello } from "./Component/Example.js";
import Person from "./Component/Person.js";
import Product from "./Component/Product.js";

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Person name="Tigran"/>
          <h1>This is our Project</h1>
        <Product name="Banana" price="$1" description="Fresh bananas" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;