import React from "react";
import { Paper, Box, Typography } from "@mui/material";
export default function SmallCard({name,link}) {
  return (
    <Paper
      sx={{
        width: "300px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin:"1vh 1vw",
        cursor:"pointer"
      }}
      elevation={3}
    >
      <Box
        component="img"
        src={link}
        sx={{ width: "75px" }}
      />
      <Typography sx={{ fontSize: "25px", fontWeight: 400 }}>
        {name}
      </Typography>
    </Paper>
  );
}
