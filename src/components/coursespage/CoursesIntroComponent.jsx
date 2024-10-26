import React from "react";

const CoursesIntroComponent = () => {
  return (
    <div className="bg-white h-auto p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-8">
            <div className="relative">
              <h1 className="text-4xl font-bold mb-4">
                Full Stack App
                <br />
                Development
                <span className="block text-yellow-500">Course</span>
              </h1>
            </div>
            <p className="text-gray-600 mb-6">
              The Full Stack App Development course offers comprehensive
              training in both front-end and back-end technologies, including
              HTML, CSS, JavaScript, React.js, React Native, Node.js,
              Express.js, and MongoDB. Through real-time projects and hands-on
              learning, students gain the skills needed to build fully
              functional web applications from scratch. The course also includes
              mentorship and personalized guidance, ensuring you&apos;re
              job-ready with practical experience in all aspects of web
              development.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfH9msRE81T9tvPrBRWi5upq9NLkMpRYwXuqQuWehl8lclsOA/viewform" target="_blank"
              className="inline-block bg-blue-500 shadow-sm text-white py-2 px-6 rounded-full hover:bg-blue-600 hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Enroll now
            </a>
          </div>
          <div className="md:w-1/3 p-4 md:p-8">
            <img
              src="/images/intro.png"
              alt="Full Stack Technologies"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesIntroComponent;
