import React from "react";

const CourseOfferingsComponent = () => {
  return (
    <>
      <div className="text-center  mt-8 md:mt-12">
        <h1 className="text-3xl font-bold relative inline-block before:absolute before:content-[''] before:bg-yellow-500 before:-bottom-2 before:left-0 before:w-full before:h-1">WHAT YOU LEARN</h1>
      </div>

      <div className="bg-white h-auto p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 p-2 md:p-4">
              <img
                src="/images/courseofferings.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-3/5 p-4 ">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-8">
                Master Both{" "}
                <span className="text-purple-600 shadow-sm">Front-End</span>{" "}
                <br /> &amp;{" "}
                <span className="text-cyan-400 shadow-sm">Back-End</span> <br />
                Technologies
              </h2>
              <p className="text-gray-700 md:tracking-wide ">
                Gain the expertise to develop full-stack applications for both
                Android and iOS platforms. On the front-end, you&apos;ll use
                React Native to create seamless, responsive user interfaces,
                while mastering back-end technologies like Node.js, Express.js,
                and MongoDB to handle server-side logic, databases, and APIs.
                This comprehensive skill set equips you to build fully
                functional mobile applications, managing everything from user
                interaction to data processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseOfferingsComponent;
