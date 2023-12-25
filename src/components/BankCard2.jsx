/* eslint-disable  */
import React, { useState } from "react";

import { Box, Stack, Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import img from "../assets/Group 7.png";
import logo from "../assets/logo.png";
import back1 from "../assets/back1.png";
import rectangle from "../assets/Rectangle 20.png";
import { Link } from "react-router-dom";

const BankCard2 = () => {
  const theme = useTheme();

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
      <div class="flex justify-center items-center">
        <div class="space-y-4">
          <Link to="salary-card">
            <div class="w-80 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
              <img
                class="relative object-cover w-full h-full rounded-xl"
                src="https://i.imgur.com/Zi6v09P.png"
              />

              <div class="w-full px-8 absolute top-8">
                <div class="flex justify-between">
                  <div class="flex items-center justify-between">
                    <h2 class="text-xl font-bold">CB |</h2>
                    <p class="font-light tracking-widest ml-2">
                      Universal Bank
                    </p>
                  </div>
                </div>
                <div class="mt-5 flex items-center justify-between">
                  <img src={rectangle} />
                  <img src={img} />
                </div>
                <h2 class="text-xl font-bold">5656 4586 4562 4568</h2>
                <p class="font-light">04/12</p>
                <img
                  src={logo}
                  className="float-right"
                  style={{ rotate: "90deg" }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default BankCard2;
