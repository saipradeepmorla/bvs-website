import React from 'react';
import { Link } from 'react-router-dom';

const CustomAppSection = () => {
 
  return (
    <section className="bg-blue-500 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white z-10 mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Building Custom Apps and Websites for Your Business Needs
          </h2>
          <p className="mb-8 text-lg">
            We specialize in creating tailored apps and websites that enhance user experience and drive business growth
          </p>
          <Link to='/courses' className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition duration-300">
            Explore &gt;
          </Link>
        </div>
        <div className="lg:w-1/2 relative z-10">
          <img 
            src="/images/Vector.png" 
            alt="Background shape" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md lg:max-w-lg xl:max-w-xl"
          />
          <img 
            src="/images/mobile.png" 
            alt="Mobile app illustration" 
            className="relative mx-auto w-full max-w-sm lg:max-w-md xl:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomAppSection;
