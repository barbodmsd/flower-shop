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
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../public/assets/logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import { useSelector } from "react-redux";
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

export default function Navbar(props) {
  const listLength = useSelector((state) => state.cartSlice.list).length;
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
                width={"170px"}
                sx={{
                  bgcolor: "bg",
                  borderRadius: "5px",
                }}>
                <Input
                  endAdornment={
                    <InputAdornment position='end'>
                      <SearchRoundedIcon sx={{ color: "txt" }} />
                    </InputAdornment>
                  }
                  fullWidth
                  disableUnderline={true}
                  sx={{
                    px: " 10px ",
                  }}
                />
              </Box>
              {/* cart */}
              <Link to={"/cart"}>
                <Badge badgeContent={listLength} sx={{color:'txt'}}>
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
