import { Box } from "@mui/material";
import React from "react";
import { Atom } from "react-loading-indicators";

export default function Loading() {
  return (
    <>
      <Box
        sx={{
            zIndex:10000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          inset: 0,
          backdropFilter:'blur(5px)'
        }}>
        <Atom color='#EAB9B7' />
      </Box>
    </>
  );
}
