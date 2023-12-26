import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { useTheme } from "@mui/system";
import back1 from "../assets/back1.png";
import { Link } from "react-router-dom";
import rectangle from "../assets/Rectangle 20.png";
import logo from "../assets/logo.png";
import img from "../assets/Group 7.png";

const BankCard1 = () => {
  const theme = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      sx={{
        mt: 2,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up("lg")]: {
          justifyContent: "center",
        },
      }}
    >
      <motion.div
        className="flex justify-center items-center"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <Link>
            <motion.div
              onClick={handleCardFlip}
              className="w-80 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl"
              style={{
                backgroundImage: `url(${back1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-full h-full relative overflow-hidden rounded-xl"
                initial={{ opacity: 1 }}
                animate={{ opacity: isFlipped ? 0 : 1 }}
              >
                <img
                  className="relative object-cover w-full h-full rounded-xl"
                  src={back1}
                  alt="Card Front"
                />

                <div className="w-full px-8 absolute top-8">
                  <div className="flex justify-between">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">CB |</h2>
                      <p className="font-light tracking-widest ml-2">
                        Universal Bank
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <img src={rectangle} />
                    <img src={img} />
                  </div>
                  <h2 className="text-xl font-bold">5656 4586 4562 4568</h2>
                  <p className="font-light">04/12</p>
                  <img
                    src={logo}
                    className="float-right"
                    style={{ rotate: "90deg" }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="w-full h-full absolute top-0 left-0  rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isFlipped ? 1 : 0 }}
              >
                <div className="w-full top-8">
                  <div className="bg-blue-950 w-full h-14 mt-8" />
                  <div className="p-4">
                    <div className="rounded bg-blue-300 w-full h-11 mt-4 mr-4">
                      <span style={{ transform: "scaleY(-1)" }}>123</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </Box>
  );
};

export default BankCard1;
