import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container } from "@mui/material";
import Header from "../components/Header";
import Balance from "../components/Balance";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import group9 from "../assets/Group 9.png";
import group10 from "../assets/group10.png";
import BottomNavbar from "../components/BottomNavbar";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = async () => {
    await controls.start({ rotate: 180, opacity: 0 });

    navigate("/salary-card");
  };

  const items = [
    <motion.div
      className="item"
      data-value="1"
      whileHover={{ scale: 1.1 }}
      animate={controls}
      onClick={handleClick}
      style={{ marginRight: "20px" }}
    >
      <img src={group10} style={{ width: "250px" }} />
    </motion.div>,
    <motion.div
      className="item"
      data-value="2"
      whileHover={{ scale: 1.1 }}
      animate={controls}
      onClick={handleClick}
    >
      <img src={group9} />
    </motion.div>,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 2 },
  };



  return (
    <>
      <Container>
        <Header title={"Bank Cards"} />
        <Balance />
        {isMobile ? (
          <div className="flex justify-center items-center p-2">
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center">{items}</div>
        )}
      </Container>
      <BottomNavbar />
    </>
  );
};

export default Home;
