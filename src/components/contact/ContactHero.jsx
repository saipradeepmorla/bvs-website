import React from "react";
import { MdMailOutline, MdPhoneInTalk, MdChat } from "react-icons/md";

const ContactHero = () => {
  const contents = [
    {
      title: "Costumer Support",
      url: "tel:+917993558948",
      desc:"+91 7993558948",
      icon: MdPhoneInTalk,
    },
    {
      title: "Chat with Us",
      url: "https://wa.me/+917993558948",
      desc: "+91 7993558948",
      icon: MdChat,
    },
    {
      title: "Drop a Mail",
      url: "mailto:bvs@gmail.com",
      desc: "bvs@gmail.com",
      icon: MdMailOutline,
    },
  ];
  return (
    <section className="bg-gray-300">
      <div className="w-full h-auto bg-gradient-to-b from-teal-900 to-transparent p-4">
        <div className="text-white my-2 md:my-8 text-center space-y-2 md:space-y-4">
          <h2 className=" text-2xl md:text-4xl font-bold ">
            Have Questions? We Have Answers!
          </h2>
          <p className="text-sm md:text-base">
            &quot;We&apos;re here to assist you reach out with any questions,
            and we&apos;ll provide the answers you need!&quot;
          </p>
        </div>
        <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-4 ">
          {contents.map((content, index) => (
            <a href={content.url} target="_blank"
              key={index}
              className="bg-white aspect-square h-auto w-3/5 mx-auto md:w-1/5 shadow-md hover:shadow-xl rounded-lg"
            >
              <div className="h-full w-full flex flex-col justify-center items-center ">
                <content.icon className="w-10 h-10 md:w-16 md:h-16"/>
                <div className="text-center">
                <h2 className="font-bold">{content.title}</h2>
                <p className="text-sm">{content.desc}</p>
              </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
