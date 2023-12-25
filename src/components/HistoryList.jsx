import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CallIcon from "@mui/icons-material/Call";
import WifiIcon from "@mui/icons-material/Wifi";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import { Typography, Box } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import { useTheme } from "@mui/system";
import Header from "./Header";

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
      {
        icon: <DirectionsCarIcon />,
        title: "Uber",
        subtitle: "Service",
        color: "#3559E0",
        amount: "-$43.00",
      },
      {
        icon: <ReplyIcon />,
        title: "Card to card",
        subtitle: "Maria",
        color: "#F11A7B",
        amount: "-$2467.00",
      },
    ],
  },
  {
    date: "12 March",
    subdata: [
      {
        icon: <ReplyIcon />,
        title: "Card to card",
        subtitle: "Maria",
        color: "#F11A7B",
        amount: "+$1443.00",
      },
    ],
  },
];

export default function HistoryList() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mb: 4,
        width: "100%",
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
            <Typography variant="h6" sx={{ mt: 1, color: "#fff" }}>
              {item.date}
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
  );
}
