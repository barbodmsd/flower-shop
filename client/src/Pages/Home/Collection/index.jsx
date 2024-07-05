import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Collection.css";
import { Mousewheel, Pagination } from "swiper/modules";

export default function Collection() {
  const [collection, setCollection] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("sliders?populate=*");
      setCollection(res);
    })();
  }, []);
  const items = collection?.map((e, index) => (
    <SwiperSlide key={index}>
      <img
      width={'100%'}
      height={'100%'}
        src={
          import.meta.env.VITE_URL + e?.attributes?.image?.data?.attributes?.url
        }
        alt={e?.attributes?.name}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <Stack alignItems={"center"} gap={"20px"} p={"10px"}>
        {/* text */}
        <Box sx={{ bgcolor: "bglight", borderRadius: "10px", p: "10px" }}>
          <Typography sx={{ color: "txt", fontSize: "2em" }}>
            New Collection
          </Typography>
        </Box>
        {/* slider */}
        <Stack width={"100%"} height={"500px"} p={'10px'} >
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className='collection'>
            {items}
          </Swiper>
        </Stack>
      </Stack>
    </>
  );
}
