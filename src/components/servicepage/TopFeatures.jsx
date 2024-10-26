import React from "react";

const TopFeatures = () => {
  const featuresData = [
    {
      id: 1,
      title: "Custom Web & App Development",
    },
    {
      id: 2,
      title: "Targeted Digital Marketing",
    },
    {
      id: 3,
      title: "Effective Social Media Campaigns",
    },
    {
      id: 4,
      title: "Seamless UI/UX Design",
    },
    {
      id: 5,
      title: "Cross-Platform App Development",
    },
    {
      id: 6,
      title: "Real-Time Performance Analytics",
    },
  ];
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative before:absolute before:h-1 before:w-full before:content-[''] before:-bottom-2 before:left-0 before:bg-yellow-500">
          Top Features
        </h2>
      </div>
      <div className="h-auto p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 md:justify-around">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex justify-start items-center rounded-full shadow-md hover:shadow-xl w-4/5 md:w-2/5"
              >
                <div className="bg-yellow-500 h-12 w-12 md:h-20 md:w-20 text-center flex items-center justify-center text-xl md:text-3xl font-bold rounded-full">
                  {feature.id}
                </div>
                <div className="md:h-20 text-sm md:text-2xl font-semibold flex items-center rounded-3xl p-4">
                  {feature.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeatures;
