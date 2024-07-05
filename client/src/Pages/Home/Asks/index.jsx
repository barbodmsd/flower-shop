import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Asks() {
  return (
    <>
      <Stack gap={"20px"} alignItems={"center"}>
        <Typography fontSize={"2em"} sx={{ color: "txt" }}>
          Frequently Asked Questions
        </Typography>
        {/* asks */}
        <Stack width={"100%"} gap={"20px"} m={"20px"}>
            {/* first */}
          <Stack gap={"30px"} direction={"row"} justifyContent={"center"}>
            <Stack sx={{ bgcolor: "bglight",boxShadow:'0 3px 5px 1px rgba(0,0,0,0.2)', borderRadius: "10px", p: "10px" }}>
              <Typography fontSize={'1.5em'}>1.Lorem ipsum is placeholder text</Typography>
            </Stack>
            <Stack sx={{ bgcolor: "bglight",boxShadow:'0 3px 5px 1px rgba(0,0,0,0.2)', borderRadius: "10px", p: "10px" }}>
              <Typography fontSize={'1.5em'}>2.Lorem ipsum is placeholder text</Typography>
            </Stack>
          </Stack>
          {/*  */}
          <Stack gap={"30px"} direction={"row"} justifyContent={"center"}>
            <Stack sx={{ bgcolor: "bglight",boxShadow:'0 3px 5px 1px rgba(0,0,0,0.2)', borderRadius: "10px", p: "10px" }}>
              <Typography fontSize={'1.5em'}>3.Lorem ipsum is placeholder text</Typography>
            </Stack>
            <Stack sx={{ bgcolor: "bglight",boxShadow:'0 3px 5px 1px rgba(0,0,0,0.2)', borderRadius: "10px", p: "10px" }}>
              <Typography fontSize={'1.5em'}>4.Lorem ipsum is placeholder text</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
