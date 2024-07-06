import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Input, Stack } from "@mui/material";
import useForm from "../../../Utils/useForm";
import fetchData from "../../../Utils/fetchData";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Slices/authSlice";
import { message } from "../../../App";

export default function Login({ handlePageType }) {
  const [field, handleChange] = useForm();
const dispatch=useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(import.meta.env.VITE_API + "auth/local", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(field),
      });
      const data = await res.json();
      dispatch(login({ user: data.user, token: data.jwt }));
      message({type:'success',message:'login successfully'})
    } catch (error) {
     console.log(error)
    }
  };

  return (
    <Container
      sx={{ bgcolor: "rgba(0,0,0,0.5)" }}
      component='main'
      maxWidth={"xs"}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' sx={{ color: "white" }} variant='h5'>
          Register
        </Typography>
        <Stack
          gap={"10px"}
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}>
          <Input
            required
            fullWidth
            id='identifier'
            onChange={handleChange}
            type='text'
            label='identifier'
            name='identifier'
            autoFocus
            placeholder='Username or password'
            sx={{
              bgcolor: "rgba(255,255,255,1)",
              p: "5px 10px",
              borderRadius: "5px",
            }}
          />
         
          <Input
            required
            fullWidth
            id='password'
            onChange={handleChange}
            type='password'
            label='Password'
            name='password'
            autoFocus
            placeholder='Password'
            sx={{
              bgcolor: "rgba(255,255,255,1)",
              p: "5px 10px",
              borderRadius: "5px",
            }}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={handlePageType} sx={{ color: "white" }}>
                {"Don't have an account? Log In"}
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
