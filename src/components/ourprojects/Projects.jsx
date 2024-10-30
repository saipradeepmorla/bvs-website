const Project = () => {
  const services = [
    {
      image: "/images/mvm.jpg",
      description: "This Website Build By CMS Software as WordPress",
      link: "https://mobilevillagemart.in",
    },
    {
      image: "/images/sapthagiritraders.png",
      description:
        "This website is built using WordPress as its content management system.",

      link: "https://sapthagiritraders.com/",
    },
    {
      image: "/images/mr-optics.png",
      description: "This website is built using ReactJS and Tailwind Css.",

      link: "https://mr-optics.in/",
    },
    {
      image: "/images/tractionlifts.png",
      description:
        "We develop responsive, user-friendly websites HTML and Css And JAVAScript",

      link: "https://tractionlifts.in",
    },
    {
      image: "/images/srikalagolashambhavi.png",
      description:
        "We create custom, high-performance applications Using React With Firebase",

      link: "https://srikalagolashambhavi.com",
    },
    {
      image: "/images/businessvictorysolutions.png",
      description:
        "We provide expert social media marketing services to boost your brand's online presence",

      link: "https://businessvictorysolutions.in",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl relative inline-block before:absolute before:content-[''] before:h-1 before:-bottom-2 before:left-0 before:w-full before:bg-yellow-500">
            Explore Our <span className="text-green-600">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105"
            >
              <div className="relative h-48 md:h-56 lg:h-64">
                <img
                  src={service.image}
                  alt={service.description}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">{service.description}</p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center px-4 py-2 text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
