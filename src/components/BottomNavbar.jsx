// BottomNavbar.js

import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useTheme } from "@mui/system";
import { useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";

const navigationItems = [
  { icon: HomeOutlinedIcon, path: "/home" },
  { icon: ViewDayOutlinedIcon, path: "/catelogue" },
  { icon: ScheduleOutlinedIcon, path: "/history" },
  { icon: DensityMediumOutlinedIcon, path: "/density" },
];

const BottomNavbar = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    const selectedNavItem = navigationItems[newValue];
    navigate(selectedNavItem.path);
  };

  const commonIconStyle = {
    backgroundColor: "#7071E8",
    borderRadius: "2rem",

    [theme.breakpoints.up("lg")]: {},
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        [theme.breakpoints.up("lg")]: {
       
        },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigationChange}
        sx={{
          backgroundColor: "#2F395B",
          p: 1,
          color: "white",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        {navigationItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={React.createElement(item.icon, {
              sx: {
                fontSize: value === index ? 40 : 25,
                color: value === index ? "white" : "#7A91D2",
                backgroundColor: value === index ? "#7071E8" : "transparent",
                borderRadius: "2rem",
                p: value === index ? 1 : null,
              },
            })}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavbar;
