import React, { useState } from "react";

const ContactForm = () => {
  const [disable, setDisable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    try {
      const response = await fetch("Your Google sheet apps script api ", {
        method: "POST",
        body: formData,
      });
      const result = await response.text();
      if (result) {
        console.log(result);
        formEle.reset(); //to reset the form after submitting
        setDisable(false);
      }
    } catch (error) {
      console.log(error);
      setDisable(false);
    }
  };
  return (
    <form
      className="w-full space-y-2 md:space-y-4 mb-8"
      onSubmit={handleSubmit}
    >
      <div className="hidden">
        <label htmlFor="formType" className="font-bold text-lg mb-1">
          Form Type
        </label>
        <input
          type="text"
          id="formType"
          name="formType"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 "
          defaultValue="clients"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="fullName" className="font-bold text-lg mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="Name"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 "
          placeholder="Your Name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="company" className="font-bold text-lg mb-1">
          Institution/Company
        </label>
        <input
          type="text"
          name="Company"
          id="company"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 "
          placeholder="enter your company/Institution"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Phone" className="font-bold text-lg mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="Phone"
          id="Phone"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 "
          placeholder="Enter your phone no here"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-bold text-lg mb-1">
          Email
        </label>
        <input
          type="email"
          name="Email"
          id="email"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 "
          placeholder="Enter your email here"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="query" className="font-bold text-lg mb-1">
          Write your Query
        </label>
        <input
          id="query"
          type="text"
          name="Query"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 overflow-y-scroll "
          placeholder="enter your query here"
        />
      </div>
      <div className="flex md:justify-start justify-center items-center w-full">
        <button
          disabled={disable}
          type="submit"
          className="w-3/5 p-4 bg-green-300 hover:bg-green-500 shadow-sm hover:shadow-lg transition duration-150 ease-in hover:-translate-y-1 hover:text-white font-bold rounded-full "
        >
          {disable ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
