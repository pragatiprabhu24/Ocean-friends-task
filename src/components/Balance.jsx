import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

export default function Balance() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 2,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.up("lg")]: {},
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
