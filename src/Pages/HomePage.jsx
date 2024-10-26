import React from "react";
import Carousel from "../components/home/Carousel";
import About from "../components/home/About";
import CustomAppSection from "../components/home/CustomAppSection";
import FullStackCourseSection from "../components/home/FullStackCourseSection";
import TechLogos from "../components/home/TechLogos";
import ReviewsSection from "../components/ReviewsSection";
import ServicesWeOffer from "../components/ServicesWeOffer";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <About />
      <ServicesWeOffer />
      <TechLogos />
      <CustomAppSection />
      <FullStackCourseSection />
      <ReviewsSection title="Reviews" />
    </>
  );
};

export default HomePage;
