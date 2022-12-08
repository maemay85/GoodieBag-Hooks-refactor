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
      <ul className="candy-list">
        {candies.map((candy) => (
          <li candy={candy} key={candy.id}>{candy}</li>
        ))}
      </ul>
    </div>
  )

}

export default AllCandies
