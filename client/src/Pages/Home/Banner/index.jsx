import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { Atom } from "react-loading-indicators";
import Loading from "../../../Components/Loading";

export default function Banner() {
  const [banner, setBanner] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("banners?populate=*");
      setBanner(res);
    })();
  }, []);
  console.log(banner);
  return (
    <>
      <Stack direction={"row"} width={"100%"} height={"60vh"}>
        {/* text */}
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          width='50%'
          sx={{ px: "20px", bgcolor: "bglight" }}>
          <Stack gap={"15px"}>
            <Typography fontSize={"3em"} color={"txt"}>
              The rare heavenly
              <br />
              fresh flowers
            </Typography>
            <Typography sx={{ textAlign: "start" }} color={"txt"}>
              You can find the rarest and most beautiful
              <br /> types of flowers here!
            </Typography>
            <Box>
              <Button
                sx={{
                  bgcolor: "bg",
                  borderRadius: "10px",
                  color: "txt",
                }}>
                Get started
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Stack width='50%'>
            {banner?<img
            width={"100%"}
            height={"100%"}
            alt={banner.attributes?.name}
            src={import.meta.env.VITE_URL+banner[0]?.attributes?.image?.data?.attributes?.url}
          />:<Loading/>}
          
        </Stack>
      </Stack>
    </>
  );
}
