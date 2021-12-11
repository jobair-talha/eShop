import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <FeaturedProducts />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
