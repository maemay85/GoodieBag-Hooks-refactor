import React from "react";
import { Route, Routes } from 'react-router-dom';
import AllCandies from "./components/AllCandies";
import Navbar from "./components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Routes>
          <Route path="candies" element={<AllCandies />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
