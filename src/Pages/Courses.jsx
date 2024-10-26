import React from "react";
import CoursesIntroComponent from "../components/coursespage/CoursesIntroComponent";
import CourseOfferingsComponent from "../components/coursespage/CourseOfferingsComponent";
import CourseCardsSection from "../components/coursespage/CourseCardsSection";
import Banner from "../components/coursespage/Banner";
import FAQAccordion from "../components/coursespage/FAQAccordion";

const Courses = () => {
  return (
    <>
      <CoursesIntroComponent />
      <CourseOfferingsComponent />
      <CourseCardsSection />
      <Banner/>
      <FAQAccordion/>
    </>
  );
};

export default Courses;
