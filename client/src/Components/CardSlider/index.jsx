import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./CardSlider.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import fetchData from "../../Utils/fetchData";

export const ProductsCard = ({ img, id, name, price, discount }) => {
  return (
    <Card sx={{ width: 300, height: 370 }}>
      <CardMedia sx={{ height: 200 }} image={img} title={name} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Price : ${price}
        </Typography>
        {discount && (
          <Typography variant='body2' color='text.secondary'>
            DiscountPrice : ${price * (1 - discount / 100)}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Link to={`/product-details/${id}/${name}`}>
          <Button size='small'>details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default function CardSlider({ catalogs }) {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(`products?populate=*&filters[categories][id]=${catalogs}`);
      setProducts(res);
    })();
  }, []);
  const items = products?.map((e, index) => (
    <SwiperSlide key={index}>
      <ProductsCard
        id={e.id}
        name={e.attributes.name}
        price={e.attributes.price}
        discount={e.attributes.discount}
        img={
          import.meta.env.VITE_URL + e?.attributes?.image?.data?.attributes?.url
        }
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Stack width={"100%"} height={"500px"} p={"10px"}>
        <Swiper
        autoplay={{
          delay:2500
        }}
          slidesPerView={4}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination,Autoplay]}
          className='cardSlider'>
          {items}
        </Swiper>
      </Stack>
    </>
  );
}
