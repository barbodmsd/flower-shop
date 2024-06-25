import { Stack, Typography } from "@mui/material";
import React from "react";
import bg from "./../../../public/assets/bg.jpg";
export default function Footer() {
  return (
    <>
      <Stack
        width={"100%"}
        height={"400px"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <Typography fontSize={"3em"} color='txt'>
          Footer
        </Typography>
      </Stack>
    </>
  );
}
