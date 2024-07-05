import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import woman from "./../../../../public/assets/woman3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./ChooseUs.css";
import { Autoplay, EffectCards } from "swiper/modules";
import fetchData from "../../../Utils/fetchData";

export default function ChooseUs() {
  const [chooseUs, setChooseUs] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("chooseuses?populate=*");
      setChooseUs(res);
    })();
  }, []);
  const items = chooseUs?.map((e, index) => (
    <SwiperSlide key={index}>
      <img
        width={"100%"}
        height={"100%"}
        src={
          import.meta.env.VITE_URL + e?.attributes?.image?.data?.attributes?.url
        }
        alt={e?.attributes?.name}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Stack gap={"20px"} minHeight={"70vh"} alignItems={"center"}>
        {/* choose us */}
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"49%"}
            height={"100%"}>
            <Typography
              fontSize={"2em"}
              sx={{
                color: "txt",
                bgcolor: "bglight",
                p: "10px",
                borderRadius: "10px",
              }}>
              Why Choose Us?
            </Typography>
          </Stack>
          <Box width={"49%"} height={"100%"}>
            <img
              width={"100%"}
              height={"100%"}
              src={woman}
              alt={"why choose us"}
            />
          </Box>
        </Stack>
        {/* because */}
        <Stack
          height={"400px"}
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          {/* slider */}
          <Stack width={"49%"} height={"100%"}>
            <Swiper
              effect={"cards"}
              autoplay={{
                delay:2500
              }}
              grabCursor={true}
              modules={[EffectCards,Autoplay]}
              className='chooseUs'>
              {items}
            </Swiper>
          </Stack>
          {/* text */}
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width={"49%"}
            height={"100%"}>
            <Typography
              fontSize={"2em"}
              sx={{
                color: "txt",
                bgcolor: "bglight",
                p: "10px",
                borderRadius: "10px",
              }}>
              Because :)
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
