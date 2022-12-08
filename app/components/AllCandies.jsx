import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCandies } from "../features/allCandiesSlice";

const AllCandies = () => {
  const candies = useSelector((state) => state.candies.candies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCandies());
  }, [dispatch]);

  return (
    <div>
      <ul className=""></ul>
    </div>
  )

}
