import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiSwift, SiGoogleanalytics, SiHootsuite, SiBuffer, SiFigma, SiSemrush, SiMongodb } from 'react-icons/si';

const OurInventory = () => {
  const technologies = [
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
    { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <FaReact className="text-blue-400" />, name: 'React' },
    { icon: <SiSwift className="text-green-500" />, name: 'Swift' },
    { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
    { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
    { icon: <SiGoogleanalytics className="text-yellow-500" />, name: 'Google Analytics' },
    { icon: <FaWordpress className="text-blue-700" />, name: 'WordPress' },
    { icon: <SiHootsuite className="text-red-500" />, name: 'Hootsuite' },
    { icon: <SiBuffer className="text-blue-800" />, name: 'Buffer' },
    { icon: <SiFigma className="text-purple-500" />, name: 'Figma' },
    { icon: <SiSemrush className="text-orange-600" />, name: 'SEMrush' },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center relative inline-block">
            Our <span className="text-green-600">Inventory</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></span>
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center transition-transform hover:scale-110 cursor-pointer w-full"
              title={tech.name}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2">
                {tech.icon}
              </div>
              <span className="text-[10px] sm:text-xs md:text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurInventory;
