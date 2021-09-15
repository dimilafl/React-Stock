// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Sports() {
  const [sportsData, setSportsData] = useState({});

  useEffect(() => {
    let url = "https://www.scorebat.com/video-api/v3/";

    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        setSportsData(response.data);
      })
      .catch((error) => console.error);
  }, []);

  return (
    <div>
      Soccer
      <span>
        <br />
        <br />
        <div>Under Construction</div>
        <br />

        {Object.keys(sportsData).map((item) => (
          <Link key={item} to={`/sports/${item}`} className="sports-text">
            {/* {console.log(sportsData)} */}

            {console.log(sportsData[item])}
            {/* 
            {console.log(sportsData[item][0])}
            {console.log(sportsData[item][0].title)} */}

            {/* {() => {
              let n = 0;

              while (n < 80) {
                {
                  return sportsData[item][n].title, n++;
                  //   ,
                }
                // n++;
              }
            }} */}

            <br />
            {sportsData[item][0].title}
            <br />
            {sportsData[item][0].competition}
            <br />
            {sportsData[item][0].matchviewUrl}
            <br />
            <br />
            {sportsData[item][1].title}
            <br />
            {sportsData[item][1].competition}
            <br />
            {sportsData[item][1].matchviewUrl}
            <br />
            <br />
            {sportsData[item][2].title}
            <br />
            {sportsData[item][2].competition}
            <br />
            {sportsData[item][2].matchviewUrl}
            <br />
            <br />
            {sportsData[item][3].title}
            <br />
            {sportsData[item][3].competition}
            <br />
            {sportsData[item][3].matchviewUrl}
            <br />
            <br />
            {sportsData[item][4].title}
            <br />
            {sportsData[item][4].competition}
            <br />
            {sportsData[item][4].matchviewUrl}

            {/* {

            {/* {
     for(let i =0; i<83; i++){
        console.log(sportsData[item][0])
     }
              //   console.log(sportsData[item])
            } */}

            {/* {sportsData.item} */}

            {/* {sportsData} */}
            {/* {sportsData[stock]} */}

            {/* added */}
            <br />
            {/* <h1>{myList}</h1> */}
            {/* added */}
          </Link>
        ))}
      </span>
      {/* <span>

      </span> */}
    </div>
  );
}

export default Sports;
