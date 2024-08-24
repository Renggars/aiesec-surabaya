import React from "react";
import Navbar from "../ui/navbar";
import Hero from "../ui/hero";
import Footer from "../ui/footer";
import SectionProgram from "../ui/sectionProgram";
import SectionBlog from "../ui/sectionBlog";
import SectionContact from "../ui/sectionContact";
import SectionPartner from "../ui/sectionPartner";

const HomeLayoutView = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionProgram />
      <SectionBlog />
      <SectionContact />
      <SectionPartner />
      <Footer />
    </div>
  );
};

export default HomeLayoutView;
