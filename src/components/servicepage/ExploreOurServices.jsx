import React from "react";
import { FiCheck } from "react-icons/fi";

const ExploreOurServices = () => {
  const services = [
    {
      title: "App Development",
      image: "/images/app-development.png",
      description: "Learn to build mobile apps for iOS and Android",
      features: ["Swift and Kotlin", "UI/UX Design", "App Store Publishing"],
    },
    {
      title: "Web Development",
      image: "/images/web-development.png",
      description: "Master the art of building modern websites",
      features: [
        "HTML, CSS, JavaScript",
        "React and Node.js",
        "Responsive Design",
      ],
    },
    {
      title: "Digital Marketing",
      image: "/images/digital-marketing.png",
      description: "Grow your online presence and reach",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
      ],
    },
    {
      title: "Social Media Handling",
      image: "/images/social-media-handling.png",
      description:
        "We develop responsive, user-friendly websites tailored to your business needs",
      features: [
        "High-quality performance",
        "Seamless user experiences",
        "Custom business solutions",
      ],
    },
    {
      title: "Ad's Services",
      image: "/images/digital-marketing.png",
      description:
        "We create custom, high-performance applications tailored to your needs",
      features: [
        "Android, iOS, and PC platforms",
        "Seamless functionality",
        "Custom application development",
      ],
    },
    {
      title: "Technical Training",
      image: "/images/technical-training.png",
      description:
        "We provide expert social media marketing services to boost your brand's online presence",
      features: [
        "Engage target audience",
        "Drive measurable results",
        "Coverage across major platforms",
      ],
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl relative inline-block before:absolute before:content-[''] before:h-1 before:-bottom-2 before:left-0 before:w-full before:bg-yellow-500">
            Explore Our <span className="text-green-600">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105"
            >
              <div className="relative h-48 md:h-56 lg:h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">{service.description}</p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FiCheck className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreOurServices;
