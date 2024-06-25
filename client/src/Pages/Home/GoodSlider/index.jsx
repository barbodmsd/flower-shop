import { Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Good.css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import fetchData from "../../../Utils/fetchData";

export default function GoodSlider() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("goods?populate=*");
      setData(res);
    })();
  }, []);
  const items = data?.map((e, index) => (
    <SwiperSlide key={index}>
      <img
      width={'100%'}
      height={'100%'}
        src={
          import.meta.env.VITE_URL + e?.attributes?.image?.data?.attributes?.url
        }
        alt={e.attributes.name}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <Stack gap={"20px"} alignItems={"center"} m={"20px 0"}>
        {/* text */}
        <Stack
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10px"}
          sx={{ bgcolor: "bglight", py: "10px" }}>
          <Typography fontSize={"3em"} sx={{ color: "txt" }}>
            What We Good At
          </Typography>
          <Typography sx={{ color: "txt", textAlign: "center" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Nam similique at magni maxime alias doloremque libero fugiat
            inventore,
          </Typography>
        </Stack>
        {/* slider */}
        <Stack width={"100%"}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{delay:2500}}
            pagination={true}
            modules={[EffectCoverflow, Pagination,Autoplay]}
            className='mySwiper'>
                {items}
            </Swiper>
        </Stack>
      </Stack>
    </>
  );
}
