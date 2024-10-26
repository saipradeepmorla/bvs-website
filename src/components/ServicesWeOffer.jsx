import React from 'react';
import { MdOutlineDeveloperMode , MdWeb, MdCampaign, MdChat, MdAdsClick, MdLaptopMac } from 'react-icons/md';
import { Link } from 'react-router-dom';

const services = [
  { icon: <MdOutlineDeveloperMode />, title: 'Application development' },
  { icon: <MdWeb />, title: 'Website development' },
  { icon: <MdCampaign />, title: 'Digital marketing' },
  { icon: <MdChat />, title: 'Social media Handling' },
  { icon: <MdAdsClick />, title: "Ad's Services" },
  { icon: <MdLaptopMac />, title: 'Technical Training' },
];

const ServicesWeOffer = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
      <div className="text-center pb-8">
        <h1 className="relative text-4xl font-bold text-center inline-block before:absolute before:content-[''] before:w-full before:h-1 before:bg-yellow-500 before:bottom-[-4px] before:left-0">
          Services We Offer
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <Link to="/services" 
              key={index} 
              className="aspect-square bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
            >
              <div className="flex flex-col items-center justify-center h-full p-4">
                <div className="text-4xl mb-2 text-gray-600 group-hover:text-green-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-sm font-semibold text-center text-gray-800 group-hover:text-green-500 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWeOffer;
