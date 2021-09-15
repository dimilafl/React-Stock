import "../App.css";
import listOfSymbols from "./data.json";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// json.maxItemsComputed
// import list from "./"

// function Stocks({ dataJson }) {
// function Stocks({ props }) {
// function Stocks({ props }) {
// function Stocks(symbolsData) {
// function Stocks({ symbolsData }) {
// function Stocks({ TestVar }) {
function Stocks(props) {
  // const stocks = ["AAPL", "MSFT", "GOOGL", "FB", "ORCL", "AMZN", "NVDA"];

  const [stocksData, setStocksData] = useState({});

  let myList = listOfSymbols.map((item) => {
    return (
      <div className="symbol" key={item.symbol}>
        {/* uncomment for extra whitespace */}
        {/* <p></p> */}
      </div>
    );
  });

  //stocks
  useEffect(() => {
    let url =
      "https://cloud.iexapis.com/stable/stock/market/batch?token=pk_f13dbb285b1e42fcbed4a2708a111494&types=quote&symbols=";
    // let url =
    //   "https://cloud.iexapis.com/stable/stock/market/batch?token=pk_6f321a57598f48c5a22e4537e20617b5&types=quote&symbols=";

    // old token = pk_6f321a57598f48c5a22e4537e20617b5
    // new token = pk_f13dbb285b1e42fcbed4a2708a111494

    myList.forEach((stock) => {
      url += `${stock.key},`;
    });

    axios
      .get(url)
      .then((response) => {
        setStocksData(response.data);
      })
      .catch((error) => console.error);
  }, []);

  return (
    <div className="container">
      <h1>Stock-Data App</h1>

      {Object.keys(stocksData).map((stock) => (
        <Link
          key={stock}
          to={`/stocks/${stock}`}
          className="link"
          style={{
            backgroundColor: "green",
            color: "purple",
            fontSize: "25px",
          }}
        >
          <strong>{stock}</strong>
          <br />
          {stocksData[stock].quote.companyName}
          {/* added */}
          <hr />
          {/* for full iteration */}
          {/* <h1>{console.log(myList)}</h1> */}
          {/* added */}
        </Link>
      ))}
    </div>
  );
}

export default Stocks;
