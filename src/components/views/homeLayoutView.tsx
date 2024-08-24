import React from "react";
import Navbar from "../ui/navbar";
import Hero from "../ui/hero";
import Footer from "../ui/footer";
import Section from "../ui/section";

const HomeLayoutView = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayoutView;
