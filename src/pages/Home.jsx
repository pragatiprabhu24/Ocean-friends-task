import React from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/system";

import BankCard1 from "../components/BankCard1";
import Balance from "../components/Balance";
import BankCard2 from "../components/BankCard2";
import group9 from '../assets/Group 9.png'
import group10 from '../assets/group10.png'
import { useNavigate } from "react-router";
 

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/salary-card')
  }
  return (
    <>
      <Container>
        <Header title={"Bank Cards"} />
        <Balance title={"Bank Cards"} />
      </Container>
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
      <BottomNavbar />
    </>
  );
};

export default Home;
