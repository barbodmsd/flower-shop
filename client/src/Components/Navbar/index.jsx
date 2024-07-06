import {
  Badge,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Stack,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../public/assets/logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import { useSelector } from "react-redux";
import fetchData from "../../Utils/fetchData";
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export const SearchResult = ({ img, name, id }) => {
  return (
    <Link to={`product-details/${id}/${name}`}>
      <Stack
      className={'box'}
        sx={{ bgcolor: "bglight",mt:'5px' }}
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
        width={"100%"}
        height={"80px"}>
        <Stack width={"50%"} height={"100%"}>
          <img src={img} width={"100%"} height={"100%"} />
        </Stack>
        <Stack
          width={"49%"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}>
          <Typography fontSize={"1.2em"} sx={{ color: "txt" }}>
            {name.slice(0,7)}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};

export default function Navbar(props) {
  const listLength = useSelector((state) => state.cartSlice.list).length;
  const [inpValue, setInpValue] = useState();
  const [result, setResult] = useState();
  window.addEventListener("click", (e) => {
    if (!e.target.closest("searchBox") || e.target.closest('box')) {
      setInpValue("");
    }
  });
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `products?populate=*&filters[name][$containsi]=${
          inpValue && inpValue
        }&pagination[page]=1&pagination[pageSize]=3`
      );
      setResult(res);
    })();
  }, [inpValue]);
  const items = result?.map((e, index) => (
    <SearchResult
      key={index}
      img={
        import.meta.env.VITE_URL + e?.attributes?.image?.data?.attributes?.url
      }
      name={e?.attributes?.name}
      id={e.id}
    />
  ));
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: "transparent" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ height: "70px", px: "50px", bgcolor: "bglight" }}>
            {/* left side */}
            <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
              <Typography>
                <img
                  style={{
                    mixBlendMode: "darken",
                  }}
                  src={logo}
                  width={"120px"}
                  height={"50px"}
                  alt={"logo"}
                />
              </Typography>
              <Link to={"/"}>
                <Button size={"large"} sx={{ color: "txt", bgcolor: "bg" }}>
                  Home
                </Button>
              </Link>
              {/* products */}
              <Link to={"/products"}>
                <IconButton>
                  <SellRoundedIcon
                    sx={{
                      color: "txt",
                    }}
                  />
                </IconButton>
              </Link>
            </Stack>
            {/* right side */}
            <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
              {/* search */}
              <Box
                className={"searchBox"}
                width={"200px"}
                sx={{
                  bgcolor: "bg",
                  borderRadius: "5px",
                  position: "relative",
                }}>
                <Input
                  placeholder={"search..."}
                  value={inpValue}
                  onChange={(e) => setInpValue(e.target.value)}
                  endAdornment={
                    <InputAdornment position='end'>
                      <SearchRoundedIcon sx={{ color: "txt" }} />
                    </InputAdornment>
                  }
                  fullWidth
                  disableUnderline={true}
                  sx={{
                    p: "3px  10px ",
                  }}
                />
                <Stack
                  sx={{
                    width: "100%",
                    minHeight: inpValue ? "250px" : "0px",
                    bgcolor: "bglight",
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    transition: "all 0.5s",
                  }}>
                  {inpValue && items}
                </Stack>
              </Box>
              {/* cart */}
              <Link to={"/cart"}>
                <Badge badgeContent={listLength} sx={{ color: "txt" }}>
                  <ShoppingBasketIcon
                    sx={{
                      color: "txt",
                    }}
                  />
                </Badge>
              </Link>
              {/* auth */}
              <Link to={"/auth"}>
                <IconButton>
                  <PersonRoundedIcon
                    sx={{
                      color: "txt",
                    }}
                  />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
