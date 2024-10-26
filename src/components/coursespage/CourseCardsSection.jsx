import React from "react";

const CourseCardsSection = () => {
  const data = [
    {
        image: "/images/coursecards3.png",
        heading: "Android & iOS App development",
        description: `Master the art of building cross-platform mobile applications for Android and iOS using React Native. This training covers everything from intuitive user interface design to back-end integration, equipping you to create high-quality, responsive apps that enhance user experiences.`,
      },
    {
      image: "/images/coursecards2.png",
      heading: "Comprehensive Training in MERN Stack",
      description: `Develop expertise in the MERN stack—MongoDB, Express.js, React.js, and Node.js—to create dynamic, full-stack web applications. This training equips you with the essential skills for both front-end and back-end development, enabling you to build scalable and efficient applications.`,
    },
   
    {
        image: "/images/coursecards1.png",
        heading: "Real-Time Project Experience",
        description: `Gain hands-on experience by working on live projects that simulate real-world application development. You'll apply both front-end and back-end skills, ensuring you're fully prepared to tackle industry challenges with practical, job-ready expertise.`,
      },
    {
      image: "/images/coursecards4.png",
      heading: "Job-Ready Skills for a Growing Industry",
      description:
        "Develop expertise in the MERN stack—MongoDB, Express.js, React.js, and Node.js—to create dynamic, full-stack web applications. This training equips you with the essential skills for both front-end and back-end development, enabling you to build scalable and efficient applications.",
    },
  ];
  return (
    <div className="min-h-screen bg-white md:p-8 p-4  ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center">
        {data.map((item,index)=>(
            <Card key={index} image={item.image} heading={item.heading} description={item.description} />
        ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({image,heading,description}) => {
  return (
    <div className="md:w-2/5 h-auto p-4 rounded-md hover:rounded-2xl flex flex-col justify-center items-center border-2 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-200 ease-out ">
      <div className="w-1/2 h-auto">
        <img src={image} alt={heading} className="object-cover w-full h-48" />
      </div>
      <div className="p-4">
        <h3 className="text-center font-bold">{heading}</h3>
        <p className=" md:px-4 text-gray-500">
         {description}
        </p>
      </div>
    </div>
  );
};

export default CourseCardsSection;
