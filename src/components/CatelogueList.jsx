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
import { Box } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useTheme } from "@mui/system";

const data = [
  { icon: <CallIcon />, title: "Mobile", subtitle: "The debt is $34.00" },
  {
    icon: <WifiIcon />,
    title: "Internet and TV",
    subtitle: "The debt is $21.00",
  },
  {
    icon: <DirectionsCarIcon />,
    title: "Traffic fines",
    subtitle: "The debt is $1,221.00",
  },
  {
    icon: <HomeIcon />,
    title: "Housing services",
    subtitle: "The debt is $0.00",
  },
  {
    icon: <FlashOnIcon />,
    title: "Utility payments",
    subtitle: "The debt is $442.00",
  },
];

export default function CatelogueList() {
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
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#3559E0" }}>{item.icon}</Avatar>
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
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    color: "#D2E0FB",
                    borderRadius: "10px",
                    borderColor: "#4B527E",
                  }}
                >
                  Pay
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider
              variant="inset"
              component="li"
              sx={{ borderColor: "#4B527E" }}
            />
          </>
        ))}
        {/* Add more ListItems with buttons as needed */}
      </List>
    </Box>
  );
}
