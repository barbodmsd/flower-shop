import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clear, removeItem } from "../../Store/Slices/cartSlice";
import { Box, Button, Stack, Typography } from "@mui/material";
export default function Cart() {
  const { list } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const items = list?.map((e, index) => {
    return (
      <TableRow key={index}>
        <TableCell align='center'>{index + 1}</TableCell>
        <TableCell align='center'>
          <img
            width={"100px"}
            height={"100%"}
            src={
              import.meta.env.VITE_URL +
              e?.attributes?.image?.data?.attributes?.url
            }
          />
        </TableCell>
        <TableCell align='center'>{e.attributes?.name}</TableCell>
        <TableCell align='center'>{e.attributes?.price}</TableCell>
        <TableCell align='center'>{e.quantity}</TableCell>
        <TableCell align='center'>
          {" "}
          <Button
            onClick={() => dispatch(removeItem(e.id))}
            sx={{ mx: "5px", color: "txt", bgcolor: "bglight" }}>
            -
          </Button>
          <Button
            onClick={() => dispatch(addItem(e))}
            sx={{ mx: "5px", color: "txt", bgcolor: "bglight" }}>
            +
          </Button>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <>
      {list.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>ID</TableCell>
                  <TableCell align='center'>IMAGE</TableCell>
                  <TableCell align='center'>NAME</TableCell>
                  <TableCell align='center'>PRICE</TableCell>
                  <TableCell align='center'>QUANTITY</TableCell>
                  <TableCell align='center'>ADD/REMOVE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{items}</TableBody>
            </Table>
          </TableContainer>
          <Stack mt={"50px"} px={"50px"}>
            <Box>
              {" "}
              <Button
                onClick={() => dispatch(clear())}
                sx={{ bgcolor: "bglight", color: "txt" }}>
                Clear all
              </Button>
            </Box>
          </Stack>
        </>
      ) : (
        <Stack
          width={"100%"}
          height={"500px"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Typography fontSize={"3em"} sx={{ color: "txt" }}>
            Cart is empty
          </Typography>
        </Stack>
      )}
    </>
  );
}
