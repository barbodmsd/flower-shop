import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import fetchData from "../../Utils/fetchData";
import Login from "./Login";
import Register from "./Register";

export default function Auth({ theme }) {
  const [pageType, setPageType] = useState("register");
  const [bg, setBg] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("auths?populate=*");
      setBg(res[0]);
    })();
  }, []);
  const handlePageType = () => {
    setPageType(pageType === "login" ? "register" : "login");
  };
  return (
    <>
      <Stack
      height='90vh'
      justifyContent={'center'}
      alignItems={'center'}
        sx={{
          backgroundImage: `url(${
            import.meta.env.VITE_URL +
            bg?.attributes?.image?.data?.attributes?.url
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        {pageType === "login" ? (
          <Login  handlePageType={handlePageType} />
        ) : (
          <Register  handlePageType={handlePageType} />
        )}
      </Stack>
    </>
  );
}
