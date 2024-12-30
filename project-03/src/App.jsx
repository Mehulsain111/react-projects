import React, { useEffect, useState } from "react";
import Axios from "axios";
import Map from "./component/map";
import "./App.css";

function App() {
  const [ipDetails, setIpDetails] = useState(null);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3639);

  useEffect(() => {
    // Fetch IP details
    Axios.get("https://ipapi.co/json/")
      .then((res) => {
        setIpDetails(res.data);
        setLat(res.data.latitude);
        setLon(res.data.longitude);
      })
      .catch((error) => {
        console.error("Error fetching IP details:", error);
      });
  }, []);

  return (
    <>
      <h1 className="heading">IP Address Finder</h1>
      <div className="App">
        <div className="left">
          {ipDetails ? (
            <>
              <h4>What is my IPv4 address?</h4>
              <h1 id="ip">{ipDetails.ip}</h1>
              <h4>Approximate location: </h4>
              <p>
                {ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}.
              </p>
              <h4>Internet Service Provider (ISP):</h4>
              <p>{ipDetails.org}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Map lat={lat} lon={lon} />
      </div>
    </>
  );
}

export default App;
