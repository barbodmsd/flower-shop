import React from "react";
import Banner from "./Banner";
import GoodSlider from "./GoodSlider";
import Collection from "./Collection";
import ChooseUs from "./CooseUs";
import Asks from "./Asks";

export default function Home() {
  return (
    <>
    {/* banner  */}
      <Banner />
      {/* what we good at slider  */}
      <GoodSlider/>
      {/* collection slider */}
      <Collection/>
      {/* choose us */}
      <ChooseUs/>
      {/* asks */}
      <Asks/>
    </>
  );
}
