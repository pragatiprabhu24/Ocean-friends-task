import * as React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/system";

export default function Header({ title }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 5,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.up("lg")]: {},
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          wordWrap: "break-word",

          [theme.breakpoints.up("lg")]: {
            mr: 8,
          },
        }}
      >
        {title}
      </Typography>
      <Avatar
        alt="Remy Sharp"
        sx={{
          [theme.breakpoints.up("lg")]: {
            ml: 8,
          },
        }}
        src="https://images.unsplash.com/photo-1621947081720-86970823b77a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
      />
    </Box>
  );
}
