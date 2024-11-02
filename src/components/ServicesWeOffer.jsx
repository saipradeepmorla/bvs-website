import React from "react";
import {
  MdOutlineDeveloperMode,
  MdWeb,
  MdCampaign,
  MdChat,
  MdAdsClick,
  MdLaptopMac,
} from "react-icons/md";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <MdOutlineDeveloperMode className="text-blue-500" />,
    title: "Application Development",
    path: "/services/project",
  },
  {
    icon: <MdWeb className="text-red-500" />,
    title: "Website Development",
    path: "/services/project",
  },
  {
    icon: <MdCampaign className="text-yellow-500" />,
    title: "Digital Marketing",
    path: "/services/digital-marketing",
  },
  {
    icon: <MdChat className="text-purple-500" />,
    title: "Social Media Handling",
    path: "/services/social-media-handling",
  },
  {
    icon: <MdAdsClick className="text-pink-500" />,
    title: "Ad's Services",
    path: "https://addtheadd.com/",
  },
  {
    icon: <MdLaptopMac className="text-green-500" />,
    title: "Technical Training",
    path: "/courses",
  },
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
            <Link
              to={service.path}
              key={index}
              className="aspect-square bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
            >
              <div className="flex flex-col items-center justify-center h-full p-4">
                <div
                  className={`text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 ${service.icon.props.className}`}
                >
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
