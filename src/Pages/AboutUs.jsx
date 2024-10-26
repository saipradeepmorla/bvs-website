import React from "react";
import AboutUsMain from "../components/aboutus/AboutUsMain";
import ServicesWeOffer from "../components/ServicesWeOffer";
import OurMission from "../components/aboutus/OurMission";
import WhyChooseUs from "../components/aboutus/WhyChooseUs";
import ReviewsSection from "../components/ReviewsSection";

const AboutUs = () => {
  return (
    <>
      <AboutUsMain />
      <ServicesWeOffer />
      <OurMission/>
      <WhyChooseUs/>
      <ReviewsSection title="Our Success Stories" />
    </>
  );
};

export default AboutUs;
