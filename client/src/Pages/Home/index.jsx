import React from "react";
import Banner from "./Banner";
import GoodSlider from "./GoodSlider";
import Collection from "./Collection";

export default function Home() {
  return (
    <>
    {/* banner  */}
      <Banner />
      {/* what we good at slider  */}
      <GoodSlider/>
      {/* collection slider */}
      <Collection/>
    </>
  );
}
