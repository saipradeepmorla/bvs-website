import React from "react";
import MapEmbed from "./MapEmbed ";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="py-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold relative inline-block">
          Contact Us
          <span className="absolute -bottom-2 h-1 w-full left-0 bg-yellow-500"></span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="w-full p-4 md:p-8 flex flex-col md:flex-row justify-around items-center">
          <div className="w-4/5 md:w-2/5">
            <ContactForm/>
          </div>
          <div className="w-4/5 md:w-2/5">
            <h2 className="font-bold">Address</h2>
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
