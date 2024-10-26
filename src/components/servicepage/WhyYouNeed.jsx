import React from "react";

const WhyYouNeed = () => {
  const reasons = [
    {
      icon: "/images/whyyouneed1.svg",
      size: "w-24 h-24", // Slightly larger
    },
    {
      icon: "/images/whyyouneed2.svg",
      size: "w-20 h-20",
    },
    {
      icon: "/images/whyyouneed3.svg",
      size: "w-20 h-20",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center relative inline-block">
            Why you need a <span className="text-green-600">Service</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></span>
          </h2>
        </div>
        <div className="flex justify-center space-x-16 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex justify-center items-center">
              <img 
                src={reason.icon} 
                alt={`Why you need ${index + 1}`} 
                className={`${reason.size} object-contain`}
              />
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-center max-w-4xl mx-auto">
          Choosing the right service is crucial for your business growth in the digital age. With web and app development, you
          can expand your reach and provide seamless user experiences. Digital media marketing boosts your online visibility,
          while social media promotions enhance audience engagement. Our UI/UX design ensures smooth, intuitive user
          interactions, and application development opens up new revenue opportunities through mobile and desktop platforms.
          These services help your business stay competitive and grow effectively.
        </p>
      </div>
    </section>
  );
};

export default WhyYouNeed;
