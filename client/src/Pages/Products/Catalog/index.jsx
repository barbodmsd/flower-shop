import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { Box, Button, Stack, Typography } from "@mui/material";
import Loading from "../../../Components/Loading";
import { ProductsCard } from "../../../Components/CardSlider";

export default function Catalog() {
  const [products, setProducts] = useState();
  const [type, setType] = useState(2);
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `products?populate=*&filters[categories][id]=${type}`
      );
      setProducts(res);
    })();
  }, [type]);

  const items = products?.map((e, index) => (
    <ProductsCard
      key={index}
      id={e.id}
      name={e.attributes.name}
      price={e.attributes.price}
      discount={e.attributes.discount}
      img={
        import.meta.env.VITE_URL + e?.attributes?.image?.data?.attributes?.url
      }
    />
  ));
  return (
    <>
      {
        products?<Stack m={"20px"} gap={"50px"} alignItems={"center"}>
        <Typography
          fontSize={"2.5em"}
          sx={{ color: "txt", textShadow: "5px -15px 0px rgba(0,0,0,0.2)" }}>
          Catalogs
        </Typography>
        {/* catalogs */}
        <Stack direction={"row"} gap={"20px"} justifyContent={"center"}>
          <Button
            onClick={() => setType(2)}
            size={"large"}
            sx={{ color: "txt", bgcolor: "bglight" }}>
            wedding
          </Button>
          <Button
            onClick={() => setType(1)}
            size={"large"}
            sx={{ color: "txt", bgcolor: "bglight" }}>
            Gift
          </Button>
          <Button
            onClick={() => setType(3)}
            size={"large"}
            sx={{ color: "txt", bgcolor: "bglight" }}>
            popular
          </Button>
        </Stack>
        <Stack
          width={"100%"}
          px={"30px"}
          justifyContent={"center"}
          direction={"row"}
          gap={"15px"}
          flexWrap={"wrap"}>
          {items}
        </Stack>
      </Stack>:<Loading/>
      }
    </>
  );
}
