import React from "react";

const AboutUsMain = () => {
  return (
    <section className="my-4">
      <div className="text-center md:mt-4">
        <h2 className="relative inline-block text-2xl md:text-4xl font-bold">
          About us
          <span className="bg-yellow-500 left-0 absolute -bottom-2 w-full h-1 "></span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:flex-row p-4 md:p-8 gap-4">
          <div className="w-4/5 md:w-1/2">
            <img src="/images/aboutus1.png" alt="" />
          </div>
          <div className="w-4/5 md:w-1/2">
            <h2 className="font-bold text-lg">What we do</h2>
            <p className=" leading-normal text-sm md:text-base md:leading-7">
              We provide web and app development services, creating custom
              websites and mobile applications designed to help businesses
              connect with more customers and deliver seamless online
              experiences. Our digital marketing services are focused on
              improving your brand&apos;s online presence through effective
              strategies like SEO and online advertising, driving more traffic
              to your site and increasing conversions. Through social media
              promotions, we run targeted campaigns on platforms like Facebook,
              Instagram, and Twitter, helping businesses grow their followers
              and boost engagement. Additionally, our UI/UX design ensures that
              your website or app is not only visually appealing but also easy
              to use, enhancing the overall user experience. Our application
              development services deliver high-quality mobile and desktop apps
              for Android, iOS, and other platforms, tailored to your business
              needs. We also offer SEO services, helping improve your
              website&apos;s search engine ranking and driving more organic
              traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMain;
