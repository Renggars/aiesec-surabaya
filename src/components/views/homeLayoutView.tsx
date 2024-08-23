import React from "react";
import Navbar from "../ui/navbar";
import Hero from "../ui/hero";
import Footer from "../ui/footer";

const HomeLayoutView = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomeLayoutView;
