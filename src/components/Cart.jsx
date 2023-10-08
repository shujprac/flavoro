import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );
  const [activeCart, setActiveCart] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-[20vw] h-full max-sm:w-full p-3 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all ease-linear duration-400`}
      >
        <div className="flex justify-between items-center">
          <span className="text-center font-bold text-gray-800">My orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border rounded-sm p-1 text-gray-600 text-2xl  font-bold hover:text-red-200 duration-100 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            return <ItemCard item={item} key={index} />;
          })
        ) : (
          <p className="text-xl p-3 text-center text-gray-800 font-bold ">
            Your Cart is empty
          </p>
        )}
        {cartItems.length > 0 ? (
          <div className="absolute bottom-0 mx-0 left-0 right-0 mb-5 p-3 ">
            <h3 className="font-semibold text-gray-800">Items:{totalQty}</h3>
            <h3 className="font-semibold text-gray-800">
              Total Amount: ₹{totalPrice}
            </h3>
            <hr className="w-full" />
            <button
              onClick={() => navigate("/success")}
              className="bg-green-500 font-bold px-3 py-2 mt-2 rounded-md w-full"
            >
              Checkout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div onClick={() => setActiveCart(!activeCart)}>
        <BiCart
          className={`bg-green-500 rounded-full p-1.5 shadow-xl text-5xl bottom-4 right-4 ${
            activeCart ? "hidden" : "fixed"
          } ${totalQty === 1 && "animate-bounce transition-all delay-500 "}`}
        />
      </div>
    </>
  );
};

export default Cart;
