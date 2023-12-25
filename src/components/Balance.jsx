import * as React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/system";

export default function Balance({ title }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 5,

        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.up("lg")]: {
          justifyContent: "center",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#94A3D3",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "700",
          wordWrap: "break-word",

          [theme.breakpoints.up("lg")]: {
            mr: 26,
          },
        }}
      >
        Balance <br />{" "}
        <span
          style={{
            color: "white",
            fontSize: 26,
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          $2,748.00
        </span>
      </Typography>
    </Box>
  );
}
