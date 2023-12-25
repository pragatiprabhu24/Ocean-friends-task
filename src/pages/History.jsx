import * as React from "react";
import Header from "../components/Header";
import CatelogueList from "../components/CatelogueList";
import BottomNavbar from "../components/BottomNavbar";
import { Container } from "@mui/material";
import HistoryList from "../components/HistoryList";

export default function History() {
  return (
    <>
      <Container>
        <Header title={"History"} />
        <HistoryList />
      </Container>

      <BottomNavbar />
    </>
  );
}
