import React, { useState } from "react";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import VisitorsPopupForm from './VisitorsPopupForm';

const FullStackCourseSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 relative inline-block before:absolute before:content-[''] before:bg-yellow-500 before:-bottom-2 before:h-1 before:w-4/5 before:left-1/2 before:-translate-x-1/2">
            BVS SPECIAL <span className="text-green-600">FULLSTACK COURSE</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/images/fullstackcoursesection.png"
              alt="Full Stack Course"
              className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 lg:pl-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-4 lg:mb-6">
              Special Real-Time Project Focused and Job-Ready Course by BVS
            </h3>
            <p className="mb-6 text-gray-600 lg:text-lg">
              This course offers training in Full-stack development, React
              Native, HTML, CSS, and JavaScript, focusing on real-time projects
              to equip you with practical skills for a successful career in web
              development and Application development ios/android.
            </p>
            <p className="mb-6 text-gray-600 lg:text-lg">
              click below to <span className="font-bold">download</span> course
              details
            </p>
            <button onClick={toggleHandler} className="bg-green-600 text-white font-bold py-2 px-6 lg:py-3 lg:px-8 rounded-full hover:bg-green-700 transition duration-300 mb-6 lg:mb-8">
              Download
            </button>
            <div className="flex space-x-4 lg:space-x-6">
              <FaHtml5 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-500" />
              <FaJs className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400" />
              <FaReact className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />
              <FaNodeJs className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {isOpen && (
     <VisitorsPopupForm isOpen={isOpen} onClose={toggleHandler}/>
    )}
    </>
  );
};

export default FullStackCourseSection;
