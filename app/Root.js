import React from "react";
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import AllCandies from "./components/AllCandies";

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Routes>
          <Route path="/candies" element={<AllCandies />} />
        </Routes>
      </main>
    </div>
  );
};

export default Root;
