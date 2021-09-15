import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Extra() {
  // const [currencyData, setCurrencyData] = useState({});

  // useEffect(() => {
  //   let url =
  //     "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

  //   axios
  //     .get(url)
  //     .then((response) => {
  //       // console.log(response.data);
  //       setCurrencyData(response.data);
  //     })
  //     .catch((error) => console.error);

  //   let myCurrencyList = currencyData.map((item) => {
  //     return (
  //       <div className="symbol" key={item.usd}>
  //         {/* uncomment for extra whitespace */}
  //         {/* <p></p> */}
  //       </div>
  //     );
  //   });
  // }, []);

  return (
    <div>
      <strong>Additional Stuff</strong>
      {/* <br /> */}
      {/* {console.log(currencyData.usd)} */}
      {/* <br /> */}

      {/* {Object.keys(currencyData.usd).map((item) => (
        <Link key={item} to={`/extra/${item}`} className="currency-text">
          <strong>{item}</strong>
          <br />
          
          <br />
          
        </Link>
      ))} */}

      <br />
      <br />

      <div>Dimitri Lafleur</div>
      {/* <li>
          hi
      </li> */}
    </div>
  );
}

export default Extra;
