import React, { useState, useRef, useEffect } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaWordpress, 
  FaNodeJs 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb 
} from 'react-icons/si';

const logos = [
  { name: 'HTML', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'WordPress', Icon: FaWordpress, color: '#21759B' },
  { name: 'React Native', Icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
];

const TechLogos = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;

    let animationFrameId;
    let lastTimestamp = 0;
    const scrollSpeed = 50; // Adjust this value to change scroll speed

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      if (!isHovered) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + (scrollSpeed * delta) / 1000;
          return newPosition >= scrollWidth / 2 ? 0 : newPosition;
        });
      }

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          Technologies We Use
        </h2>
        <div className="overflow-hidden">
          <div 
            ref={containerRef}
            className="flex"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: isHovered ? 'transform 0.5s ease-out' : 'none'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8 transition-all duration-300 ease-in-out"
              >
                <logo.Icon 
                  className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  style={{ 
                    color: logo.color,
                    opacity: 1
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechLogos;
