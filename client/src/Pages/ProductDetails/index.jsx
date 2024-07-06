import { Button, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSlider from "../../Components/CardSlider";
import Loading from "../../Components/Loading";
import fetchData from "../../Utils/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slices/cartSlice";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cartSlice.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;

  useEffect(() => {
    (async () => {
      const res = await fetchData(`products/${id}?populate=*`);
      setProduct(res);
    })();
  }, [id]);

  return (
    <>
      {product ? (
        <Stack mb='20px' minHeight={'80vh'}>

          {/* catalogs */}
          <CardSlider catalogs={product?.attributes?.categories?.data[0]?.id} />
          <Stack minHeight={'80vh'} gap={"50px"} mt={"50px"} alignItems={"center"}>
            {/* txt */}
            <Typography fontSize={"2em"} sx={{ color: "txt" }}>
              {product?.attributes?.categories?.data[0]?.attributes?.name.toUpperCase()}
            </Typography>
            {/* card */}
            <Card sx={{ width: 400, height: 450 }}>
              <CardMedia
                component='img'
                height='194'
                image={
                  import.meta.env.VITE_URL +
                  product?.attributes?.image?.data?.attributes?.url
                }
                alt={product.attributes.name}
              />
              <CardContent>
                <Typography variant='h5' color='text.secondary'>
                  {product.attributes.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {product.attributes.description}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Price : ${product.attributes.price}
                </Typography>
                {product.attributes.discount && (
                  <Typography variant='body2' color='text.secondary'>
                    DiscountPrice : $
                    {product.attributes.price *
                      (1 - product.attributes.discount / 100)}
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => dispatch(removeItem(id))}
                  sx={{ mx: "5px", color: "txt", bgcolor: "bglight" }}>
                  -
                </Button>
                {quantity}
                <Button
                  onClick={() => dispatch(addItem(product))}
                  sx={{ mx: "5px", color: "txt", bgcolor: "bglight" }}>
                  +
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </Stack>
      ) : (
        <Loading />
      )}
    </>
  );
}
