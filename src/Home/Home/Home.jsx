import { useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Freatured from "../Freatured/Freatured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {

  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <Category />
        <PopulerMenu />
      </div>
      <Freatured />
      <Testimonials />
    </>
  );
};

export default Home;
