import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import { Container } from "@mui/material";
import { useNavigate } from "react-router";
import group9 from "../assets/Group 9.png";
import group10 from "../assets/group10.png";
import Balance from "../components/Balance";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const controls = useAnimation();
  const handleClick = async () => {
    await controls.start({ rotate: 180, opacity: 0 });

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <Header title={"Bank Cards"} />
        <Balance />
      </Container>

      {isDesktop && (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={controls}
              onClick={handleClick}
            >
              <img
                alt=""
                src={group10}
                className="w-[260px] h-[410px] object-contain cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} animate={controls}>
              <img
                alt=""
                src={group9}
                className="w-[260px] h-[410px] object-contain cursor-pointer"
              />
            </motion.div>
          </div>
        </>
      )}

      {!isDesktop && (
        <>
          <Slider {...settings}>
            <div className="mt-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={controls}
                onClick={handleClick}
              >
                <img
                  alt=""
                  src={group10}
                  className="w-[360px] h-[350px] object-contain cursor-pointer"
                />
              </motion.div>
            </div>
            <div className="mt-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={controls}
                onClick={handleClick}
              >
                <img
                  alt=""
                  src={group9}
                  className="w-[360px] h-[350px] object-contain cursor-pointer"
                />
              </motion.div>
            </div>
          </Slider>
        </>
      )}

      <BottomNavbar />
    </>
  );
};

export default Home;
