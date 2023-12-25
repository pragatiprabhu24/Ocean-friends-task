import React, { useState } from "react";
import BottomNavbar from "./components/BottomNavbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catelogue from "./pages/Catelogue";
import History from "./pages/History";
import { Container } from "@mui/material";
import CardDetail from "./pages/CardDetail";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#090F1F",
          boxShadow: "114px 114px 114px ",
        }}
      >
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/catelogue" element={<Catelogue />} />
          <Route path="/history" element={<History />} />
          <Route path="/salary-card" element={<CardDetail />} />
        </Routes>
      </div>
    </>
  );
}
