import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import NotFound from "./Pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Search from "./Pages/Search";

const theme = createTheme({
  palette: {
    txt: "#811414",
    bg: "#EAB9B7",
    bglight: "#f3d6d5",
  },
});
export const message = ({ type, message }) => {
  return toast[type](message);
};
export default function App() {
  const { token } = useSelector((state) => state.authSlice);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box minHeight={"80vh"}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route
              path='/product-details/:id/:name'
              element={<ProductDetails />}
            />
            <Route path='/cart' element={<Cart />} />
            <Route
              path='/auth'
              element={token ? <Navigate to={"/"} /> : <Auth />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Box>

        <Footer />
      </ThemeProvider>
      <ToastContainer
        position='top-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}
