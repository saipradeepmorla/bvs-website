import React from "react";

const OurMission = () => {
  return (
    <section className="my-4 md:my-8">
      <div className="w-4/5 mx-auto">
        <img src="/images/our-vision.png" alt="" className="w-full h-auto" />
      </div>
      <div className="flex flex-col items-center md:items-start justify-around md:flex-row w-4/5 mx-auto mt-4 md:mt-8 md:space-x-4">
        <div className="w-full md:w-2/4">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
            Our Mission
          </h2>
          <p className="text-sm">
            our mission is to empower businesses by providing high-quality
            digital solutions that drive growth and enhance online presence. We
            are dedicated to understanding our client&apos;s unique needs and
            delivering customized services in web and app development, digital
            marketing, and social media promotions. Our goal is to help our
            clients achieve their business objectives through innovative
            strategies and exceptional support.
          </p>
        </div>
        <div className="w-full md:w-2/4">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
            Our Vision
          </h2>
          <p className="text-sm">
            Our vision is to be a leading digital solutions provider recognized
            for our commitment to excellence and customer satisfaction. We
            aspire to create impactful digital experiences that not only meet
            but exceed client expectations. By continuously adapting to the
            ever-evolving digital landscape, we aim to support businesses in
            realizing their full potential and achieving sustainable growth in a
            competitive market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
