import React from "react";

const WhyChooseUs = () => {
  const contents = [
    {
      heading: "Tailored Solutions",
      description: "Custom solutions tailored to your needs",
      icon: '/images/why-choose-us-1.svg'
    },
    {
      heading: "Expert Team",
      description: "Skilled professionals with extensive experience",
      icon: '/images/why-choose-us-2.svg'
    },
    {
      heading: "Client-Centric Approach",
      description: "Your success is our priority.",
      icon: '/images/why-choose-us-3.svg'
    },
    {
      heading: "Innovative Strategies",
      description: " We leverage the latest technologies.",
      icon: '/images/why-choose-us-4.svg'
    },
    {
      heading: "Cost-Effective Services",
      description: "Quality services at competitive pricing.",
      icon: '/images/why-choose-us-5.svg'
    },
    {
      heading: "Commitment to Quality",
      description: "Excellence in every project.",
      icon: '/images/why-choose-us-6.svg'
    },
  ];
  return (
    <section className="my-4 md:my-8">
      <div className="text-center my-4 md:my-8">
        <h2 className="text-2xl font-bold md:text-3xl relative inline-block">
          Why Choose Us
          <span className="absolute w-full h-1 -bottom-2 left-0 bg-yellow-500"></span>
        </h2>
      </div>
      <div className="w-4/5 md:max-w-6xl mx-auto">
        <div className="w-full flex flex-col  md:flex-row gap-4 md:gap-8 justify-around flex-wrap">
         
          {
            contents.map((content,index)=> (
                <div key={index} className="flex items-center space-x-2 w-full md:w-2/5 ">
                <div className="rounded-full w-[50px] h-[50px] bg-gray-300 flex items-center justify-center">
                  <img
                    src={content.icon}
                    width={25}
                    height={25}
                    alt={content.heading}
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                   {content.heading}
                  </h3>
                  <p className="text-sm tracking-tight">{content.description}</p>
                </div>
              </div>
            ))
          }        
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
