import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import { Container } from "@mui/material";
import { useNavigate } from "react-router";
import group9 from "../assets/Group 9.png";
import group10 from "../assets/group10.png";
import Balance from "../components/Balance";

const Home = () => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleClick = () => {
    navigate("/salary-card");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container>
        <Header title={"Bank Cards"} />
        <Balance />
      </Container>

      {isDesktop && (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="w-[260px] h-[410px] object-contain cursor-pointer"
              alt=""
              src={group10}
              onClick={handleClick}
            />
            <img
              className="w-[260px] h-[410px] object-contain cursor-pointer"
              alt=""
              src={group9}
            />
          </div>
        </>
      )}

      {!isDesktop && (
        <>
          <img
            className="absolute top-[200px] left-[20px] w-[260px] h-[410px] object-contain cursor-pointer"
            alt=""
            src={group10}
            onClick={handleClick}
          />
          <img
            className="absolute top-[200px] left-[300px] w-[260px] h-[410px] object-contain cursor-pointer"
            alt=""
            src={group9}
          />
          <div className="absolute top-[650px] left-[143px] rounded-[70px] bg-white w-[30px] h-1" />
          <div className="absolute top-[707px] left-[183px] rounded-[9px] bg-darkslategray w-5 h-1 cursor-pointer" />
        </>
      )}

      <BottomNavbar />
    </>
  );
};

export default Home;
