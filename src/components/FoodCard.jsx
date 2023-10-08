import React from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../redux/slices/CartSlice";
const FoodCard = ({ food }) => {
  const dispatch = useDispatch();
  return (
    <div className="border-2 bg-white rounded-lg p-4 w-[200px]  flex flex-col justify-center gap-2 ">
      <img
        className="w-auto h-[130px] hover:scale-110 cursor-grab duration-500 ease-in-out"
        src={food.img}
        alt=""
      />
      <div className="flex justify-between mt-3">
        <h3 className="text-sm font-bold ">{food.name}</h3>
        <span className="font-bold text-sm text-green-500">₹{food.price}</span>
      </div>
      <h3 className="text-sm font-normal">{food.desc.slice(0, 50)}...</h3>
      <div className="flex justify-between">
        <p className="text-md font-bold">⭐{food.rating}</p>
        <button
          onClick={() => {
            dispatch(addToCart({ ...food, qty: 1 }));
            toast.success(`${food.name} added to cart`);
          }}
          className="hover:bg-green-500 rounded-md p-1 text-sm hover:text-white text-black bg-gray-100"
        >
          Add to Cart
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default FoodCard;
