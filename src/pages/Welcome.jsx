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
    <div className="relative bg-gray w-full h-[812px] overflow-hidden">
      <img
        className="absolute top-[-43px] left-[-79px] w-[515px] h-[913px] object-cover hidden"
        alt=""
        src="/bg@2x.png"
      />
      <img
        className="absolute top-[294px] left-[38px] w-[263px] h-[146px] overflow-hidden object-cover"
        alt=""
        src={ocean}
      />
    </div>
  );
};

export default Welcome;
