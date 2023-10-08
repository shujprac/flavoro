import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="overflow-x-hidden h-screen flex justify-center items-center flex-col gap-2">
      {isLoading ? (
        <PropagateLoader color="#36d7b7" size={15} speedMultiplier={1} />
      ) : (
        <>
          <h1 className="text-center font-bold text-5xl mb-2 mt-3 max-sm:text-3xl">
            Order Successfull!
          </h1>
          <p className="text-center text-2xl font-medium text-green-400 max-sm:text-xl">
            order placed successfully
          </p>
        </>
      )}
    </div>
  );
};

export default Success;
