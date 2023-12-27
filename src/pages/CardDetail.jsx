import React from "react";
import { useState } from "react";
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
import { motion, useAnimation } from "framer-motion";
const data = [
  {
    date: "Today",
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
      {
        icon: <DirectionsCarIcon />,
        title: "Uber",
        subtitle: "Service",
        color: "#3559E0",
        amount: "-$467.00",
      },
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
  const [displayedItems, setDisplayedItems] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const controls = useAnimation();

  const handleDividerClick = () => {
    const listContainer = document.getElementById("list-container");

    if (listContainer) {
      if (isOpen) {
        controls.start({ y: 0 });
      } else {
        controls.start({ y: -200 });

        listContainer.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsOpen(!isOpen);

      setDisplayedItems((prev) => prev + 3);
    }
  };
  const handleListItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

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

            [theme.breakpoints.up("lg")]: {},
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Balance />
            </div>
            <div>
              <Button sx={{ p: 2, mr: 2 }} variant="outlined">
                <img src={share1} alt="Share 1" />
              </Button>
              <Button sx={{ p: 2 }} variant="outlined">
                <img src={share2} alt="Share 2" />
              </Button>
            </div>
          </div>
        </Box>
      </Container>
      <motion.div animate={controls}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#192139",
            p: 1,
            overflowY: "auto",
            maxHeight: "calc(100vh - 200px)",
          }}
        >
          <List
            id="list-container"
            sx={{
              width: "100%",
              maxWidth: 560,
              mx: "auto",
            }}
          >
            {data.map((item, index) => (
              <>
                <Divider
                  className="text-center"
                  sx={{ borderColor: "#fff", mx: "auto", width: 30 }}
                  onClick={handleDividerClick}
                />
                <Typography variant="h6" sx={{ color: "#fff", ml: 2 }}>
                  {item.date}
                </Typography>
                {item.subdata.slice(0, displayedItems).map((item, index) => (
                  <>
                    <ListItem
                      key={index}
                      onClick={() => handleListItemClick(index)}
                      selected={index === selectedItem}
                    >
                      <ListItemAvatar onClick={handleDividerClick}>
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
                    {index === selectedItem && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <Box p={2} color="#fff">
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#D2E0FB", fontSize: 15, ml: 8 }}
                          >
                            xxxxxxxxxxxx4586
                            <br /> 21/09/2023 10:12 A.M.
                          </Typography>
                        </Box>
                      </motion.div>
                    )}
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
      </motion.div>
    </>
  );
};

export default CardDetail;
