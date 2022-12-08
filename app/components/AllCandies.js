import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCandies } from "../features/allCandiesSlice";
import Candy from "./Candy";

const AllCandies = () => {
  const candies = useSelector((state) => state.allCandies.candies);
  const dispatch = useDispatch();

  console.log("candies: ", candies)

  useEffect(() => {
    dispatch(fetchAllCandies());
  }, [dispatch]);

  return (
    <div>

      <ul className="candy-list">
        {candies.map((candy) => {
          return (
            <li key={candy.id}>
              <Link><Candy candy={candy}/></Link>
            </li>
          )
        })
      }
      </ul>
    </div>
  )

}


//<p><img src={candy.imageUrl} width="50px" />{candy.name} | qty: {candy.quantity}</p>
//<p>{candy.description}</p>


export default AllCandies
