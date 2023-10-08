import React from "react";
import FoodData from "../Data/FoodData";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";
const FoodItems = () => {
  const search = useSelector((state) => state.search.search);
  const currCategory = useSelector((state) => state.category.category);
  console.log(currCategory);
  let foods = [];
  if (currCategory === "All") {
    foods = FoodData.filter(
      (food) => food && food.name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    foods = FoodData.filter(
      (food) =>
        food.category === currCategory &&
        food.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  console.log(foods);
  return (
    <div className="flex gap-10 flex-wrap max-sm:justify-center mt-4 ">
      {foods.map((food, index) => {
        return <FoodCard food={food} key={index} />;
      })}
    </div>
  );
};

export default FoodItems;
