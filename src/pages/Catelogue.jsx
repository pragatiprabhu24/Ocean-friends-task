import * as React from "react";
import Header from "../components/Header";
import CatelogueList from "../components/CatelogueList";
import BottomNavbar from "../components/BottomNavbar";
import { Container } from "@mui/material";

export default function Catelogue() {
  return (
    <>
      <Container>
        <Header title={"Catelogue"} />
        <CatelogueList />
      </Container>

      <BottomNavbar />
    </>
  );
}
