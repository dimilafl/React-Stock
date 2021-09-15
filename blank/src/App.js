// import "./App.css";
// import { Route, Link, Redirect } from "react-router-dom";
// import Stocks from "./components/Stocks";
// import Stock from "./components/Stock";
// import About from "./components/About";

import "./App.css";
import { Route, Link, RouterProps, Redirect } from "react-router-dom";
import Stocks from "./components/Stocks";
import StockInfo from "./components/StockInfo";
import About from "./components/About";
import Extra from "./components/Extra";
import Sports from "./components/Sports";
// import About from "./components/About";

// import list from "./"

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [symbolsData, setSymbolsData] = useState([]);

  //symbols
  useEffect(() => {
    let url =
      "https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_f13dbb285b1e42fcbed4a2708a111494";

    // let url =
    //   "https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_6f321a57598f48c5a22e4537e20617b5";

    // old token = pk_6f321a57598f48c5a22e4537e20617b5
    // new token = pk_f13dbb285b1e42fcbed4a2708a111494

    // stocks.forEach((stock) => {
    //   url += `${stock},`;
    // });

    axios
      .get(url)
      .then((response) => {
        setSymbolsData(response.data);
      })
      .catch((error) => console.error);
  }, []);

  // console.log(symbolsData);

  return (
    //class names
    <div className="App">
      {/* class names */}
      <header className="nav-bar">
        {/* class names */}
        <Link to="/stocks" className="navigation-items1">
          Home
        </Link>

        <br />

        {/* class names */}
        <Link to="/about" className="navigation-items2">
          About
        </Link>

        <br />

        {/* class names */}
        <Link to="/extra" className="navigation-items3">
          Extra
        </Link>

        <br />

        {/* class names */}
        <Link to="/sports" className="navigation-items4">
          Sports
        </Link>
      </header>

      <main className="main-section">
        {/* original */}
        <Route path="/stocks" exact component={Stocks} />

        <br />

        <Route
          path="/stocks/:symbol"
          render={(routerProps) => (
            <StockInfo symbol={routerProps.match.params.symbol} />
          )}
        />

        <br />

        <Route path="/about" component={About} />

        <Route path="/extra" component={Extra} />

        <Route path="/sports" component={Sports} />
      </main>
    </div>
  );
}

export default App;
