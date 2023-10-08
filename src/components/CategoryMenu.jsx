import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/slices/CategorySlice";
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  useEffect(() => {
    listUniqueCategories();
  }, []);
  return (
    <div className="mt-7">
      <h3 className="font-medium ">Find best foods</h3>
      <div className="flex gap-1 mt-4 overflow-x-scroll scroll-smooth ">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`py-2 px-3 font-bold text-sm bg-gray-300 rounded-lg hover:text-white hover:bg-green-500
          ${selectedCategory === "All" && "bg-green-500 text-white"} `}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={`py-2 px-3 font-bold text-sm bg-gray-300 rounded-lg hover:text-white ${
              category === selectedCategory && "bg-green-500 text-white"
            } hover:bg-green-500 `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
