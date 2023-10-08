import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from "../redux/slices/CartSlice";
const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="border-2 rounded-md h-1/5 hover:bg-slate-50 my-2 py-1  flex gap-2">
        <img src={item.img} alt="cart-img" className="w-[35%]" />
        <div className="flex flex-col justify-between  leading-5">
          <div className="">
            <p className="text-sm font-semibold w-[90%]"> {item.name}</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="text-sm font-semibold text-green-500">
              ₹{item.price * item.qty}
            </p>
          </div>
        </div>
        <MdDelete
          onClick={() => {
            dispatch(deleteFromCart(item));
            toast("item removed");
          }}
          className="cursor-pointer relative left-12 top-2 w-[24px]"
        />
        <div className="flex gap-2 items-center relative top-20 right-2 h-5">
          <AiOutlineMinus
            onClick={() => dispatch(removeFromCart(item))}
            className="border-1 border-gray-600 transition-all ease-linear cursor-pointer rounded-sm w-[18px] h-auto hover:bg-green-500 hover:text-white"
          />
          <p>{item.qty}</p>
          <AiOutlinePlus
            onClick={() => dispatch(addToCart(item))}
            className="border-1 border-gray-600 transition-all ease-linear cursor-pointer rounded-sm w-[18px] h-auto hover:bg-green-500 hover:text-white"
          />
        </div>
      </div>
    </>
  );
};

export default ItemCard;
