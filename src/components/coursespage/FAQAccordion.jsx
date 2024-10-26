import React, { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is the full-stack course about?",
      answer: "The full-stack course is designed to equip you with the skills to develop both front-end and back-end applications. You'll learn to build complete web applications, Android & ios Apps from scratch, covering technologies like HTML, CSS, JavaScript, React.js & Native, Node.js, Express.js, and MongoDB."
    },
    {
      question: "What will I be able to do after completing the course?",
      answer: "By the end of the course, you'll be able to develop fully functional web applications, Android & ios Apps. You'll have the ability to handle both the client-side (UI/UX) and server-side (database, APIs) development, making you a versatile developer ready for real-world projects."
    },
    {
      question: "Do I need prior coding experience to enroll?",
      answer: "While having some basic knowledge of programming can be helpful, the course is designed to take beginners from the fundamentals to advanced concepts. If you have no prior experience, we'll guide you through step by step."
    },
    {
      question: "What technologies will I learn in this course?",
      answer: "You will learn a complete stack of technologies, including front-end development with HTML, CSS, JavaScript, and React.js & Native, as well as back-end development with Node.js, Express.js, and database management with MongoDB."
    },
    {
      question: "How will this course help me get a job?",
      answer: "The course focuses on real-world projects and job readiness. You'll gain hands-on experience by building practical applications, which will be valuable additions to your portfolio. You'll also learn the latest industry tools and best practices, preparing you for various roles in full-stack development."
    },
    {
      question: "Are there any projects or assignments?",
      answer: "Yes, throughout the course, you will work on multiple real-time projects that simulate real-world scenarios. These projects will give you practical experience and a solid understanding of how full-stack applications are built and deployed."
    },
    {
      question: "How long is the course?",
      answer: "The course is designed to be completed in about 5-6 Moths depending on your learning pace. It includes comprehensive modules, hands-on projects, and assessments to ensure you gain in-depth knowledge."
    },
    {
      question: "What support will I get during the course?",
      answer: "You will have access to experienced instructors for guidance and support, along with a community of peers for collaboration. Regular feedback on projects and assignments will help you improve your skills throughout the course."
    },
    {
      question: "Can I take the course online?",
      answer: "Yes, the full-stack course is available online, allowing you to learn from anywhere and at your own pace. You’ll have access to all the resources, including video lessons, coding exercises, and project materials."
    },
    {
      question: "What career opportunities can I pursue after the course?",
      answer: "After completing the course, you can pursue a wide range of roles such as Full-Stack Developer, Front-End Developer, Back-End Developer, Android or ios App Developer or even specialize in areas like UI/UX Design or DevOps. The skills you gain will be in high demand across many industries."
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{item.question}</span>
            <span className={`transform transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="p-4">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
