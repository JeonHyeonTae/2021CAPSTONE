import React from "react";
import StopWatch from"./StopWatch";
import { GiAmmonite } from "react-icons/gi";
function Home() {
  return (
    <div className = "mainn">
      <h1>Home</h1>
      <p>Welcome home!</p>
      <div className = "Char"><GiAmmonite/>character</div>
    </div>
  );
}

export default Home;
