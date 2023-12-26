import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useTheme } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";

const navigationItems = [
  { icon: HomeOutlinedIcon, path: "/home", label: "Home" },
  { icon: ViewDayOutlinedIcon, path: "/cateloguelist", label: "Catalogue" },
  { icon: ScheduleOutlinedIcon, path: "/history", label: "History" },
  { icon: DensityMediumOutlinedIcon, path: "", label: "Other" },
];

const BottomNavbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const activeIndex = navigationItems.findIndex(
    (item) => item.path === location.pathname
  );

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        [theme.breakpoints.up("lg")]: {},
      }}
    >
      <BottomNavigation
        showLabels
        value={activeIndex}
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
            icon={React.createElement(item.icon, {
              sx: {
                fontSize: activeIndex === index ? 40 : 25,
                color: activeIndex === index ? "white" : "#7A91D2",
                backgroundColor:
                  activeIndex === index ? "#7071E8" : "transparent",
                borderRadius: "2rem",
                p: activeIndex === index ? 1 : null,
              },
            })}
            onClick={() => navigate(item.path)}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavbar;
