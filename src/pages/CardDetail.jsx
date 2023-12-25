import React from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BankCard1 from "../components/BankCard1";
import Balance from "../components/Balance";
import arrow from "../assets/arrow 1.png";
import { Link } from "react-router-dom";
import share1 from "../assets/share 1.png";
import share2 from "../assets/share 1 (1).png";
import ReplyIcon from "@mui/icons-material/Reply";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
const data = [
  {
    date: "20 April",
    subdata: [
      {
        icon: <ReplyIcon />,
        title: "Card to card",
        subtitle: "Maria",
        color: "#F11A7B",
        amount: "+$143.00",
      },
      {
        icon: <AudiotrackIcon />,
        title: "Apple music",
        subtitle: "Online",
        color: "#FD8D14",
        amount: "-$467.00",
      },
      {
        icon: <DirectionsCarIcon />,
        title: "Uber",
        subtitle: "Service",
        color: "#3559E0",
        amount: "-$467.00",
      },
    ],
  },
];

const CardDetail = () => {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Link to="/">
          <img src={arrow} className="mt-2" />
        </Link>
        <Header title={"Salary Card"} />
        <BankCard1 />
        <Box
          sx={{
            mb: 1,
            width: "100%",

            [theme.breakpoints.up("lg")]: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ml: "4rem",
            },
          }}
        >
          <div className="flex flex-row items-center justify-between">
            <Balance />
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button sx={{ p: 2 }} variant="outlined">
                <img src={share1} />
              </Button>
              <Button variant="outlined">
                <img src={share2} />
              </Button>
            </Stack>
          </div>
        </Box>
      </Container>
      <Box
        sx={{
          mb: 4,
          width: "100%",
          backgroundColor: "#192139",
          p: 1,
          [theme.breakpoints.up("lg")]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
          }}
        >
          {data.map((item, index) => (
            <>
              <Divider
                className="text-center"
                sx={{ borderColor: "#fff", mx: "auto", width: 30 }} // Centering the divider
              />
              <Typography variant="h6" sx={{ color: "#fff", ml: 2 }}>
                Today
              </Typography>
              {item.subdata.map((item, index) => (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: `${item.color}` }}>
                        {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <span style={{ color: "white", fontSize: 20 }}>
                          {item.title}
                        </span>
                      }
                      secondary={
                        <span style={{ color: "#D2E0FB", fontSize: 15 }}>
                          {item.subtitle}
                        </span>
                      }
                    />
                    <ListItemSecondaryAction>
                      <Typography
                        variant="p"
                        sx={{ mt: 1, color: "#fff", fontWeight: "bold" }}
                      >
                        {item.amount}
                      </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider
                    variant="inset"
                    component="li"
                    sx={{ borderColor: "#4B527E" }}
                  />
                </>
              ))}
            </>
          ))}
        </List>
      </Box>
    </>
  );
};

export default CardDetail;
