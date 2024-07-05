import {
  Box,
  Button,
  Divider,
  Input,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import bg from "./../../../public/assets/bg.jpg";
import logo from "./../../../public/assets/logo.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Stack
        width={"100%"}
        height={"400px"}
        p={" 50px 270px"}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <Divider />
        <Stack mt={"20px"} direction={"row"} gap={"50px"}>
          {/* first items */}
          <Stack gap={"10px"}>
            {/* logo */}
            <Stack>
              <img
                style={{ mixBlendMode: "darken" }}
                src={logo}
                alt='logo'
                width={"150px"}
                height={"50px"}
              />
            </Stack>
            <Typography>
              Lorem, ipsum dolor sit amet
              <br /> consectetur adipisicing elit. Numquam
              <br />
              saepe quisquam amet <br />
            </Typography>
          </Stack>
          {/* second */}
          <Stack gap={"10px"}>
            <Typography sx={{ fontSize: "1.5em", color: "txt" }}>
              Get In Touch
            </Typography>
            <Input
              value={"918 Abner Road,Hudson"}
              readOnly
              disableUnderline={true}
              startAdornment={
                <InputAdornment position='start'>
                  <TelegramIcon />
                </InputAdornment>
              }
            />
            <Input
              value={"example@gmail.com"}
              readOnly
              disableUnderline={true}
              startAdornment={
                <InputAdornment position='start'>
                  <EmailIcon />
                </InputAdornment>
              }
            />
            <Input
              value={"+1 245 145 22"}
              readOnly
              disableUnderline={true}
              startAdornment={
                <InputAdornment position='start'>
                  <AddIcCallIcon />
                </InputAdornment>
              }
            />
          </Stack>
          {/* third */}
          <Stack>
            <Typography sx={{ fontSize: "1.5em", color: "txt" }}>
              Quick Links
            </Typography>
            <Link to={"/"}>
              <Button sx={{ color: "black" }}>Home</Button>
            </Link>
            <Link to={"/products"}>
              <Button sx={{ color: "black" }}>Products</Button>
            </Link>
            <Link to={"/"}>
              <Button sx={{ color: "black" }}>About Us</Button>
            </Link>
            <Link to={"/"}>
              <Button sx={{ color: "black" }}>Contact Us</Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
