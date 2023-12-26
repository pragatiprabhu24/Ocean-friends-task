import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ocean from "../assets/ocean.png";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray overflow-hidden">
      <img
        className="w-[263px] h-[146px] object-cover"
        alt=""
        src={ocean}
      />
    </div>
  );
};

export default Welcome;
