import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="grid w-11/12 mx-auto mt-4 py-2 md:grid-cols-2 md:gap-4">
      <div>
        <img src="./images/aboutus.png" alt="aboutus"  className="w-full" />
      </div>
      <div className="px-4 md:pt-16 lg:pt-32 space-y-4">
        <h2 className="text-xl md:text-4xl text-green-700 font-bold">
          Expert in Application Development, Web Development, UI/UX Design, and
          Marketing Solutions
        </h2>
        <p className="text-sm font-semibold text-gray-500">
          Victory Solution specializes in app development, web design, UI/UX,
          and impactful marketing solutions to drive your business success.
        </p>
        <Link to='/aboutus' className="inline-block bg-blue-600 outline-none text-white rounded-3xl px-8 py-3 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-150">
           About Us &gt;
        </Link>
      </div>
    </div>
  );
};

export default About;
