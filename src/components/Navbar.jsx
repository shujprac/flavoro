import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col md:flex-row justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-400">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-medium text-green-400">Flavoro foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full md:w-[25vw] p-2 border rounded-md border-gray-400 outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;
