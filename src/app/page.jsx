'use client';

import { useEffect, useRef, useState } from 'react';
import Landing from './components/section/Landing';
import AboutUs from './components/section/AboutUs';
import Info from './components/section/Info';
import Footer from './components/layout/Footer';
export default function Home() {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);


  const sections = [
    <Landing key="landing" />,
    <AboutUs key="AboutUs"/>,
    // <Info key="Info"/>,
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans w-[100vw] h-[100vh] ">
      {/* Scroll indicators */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-2">
        {sections.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeIndex === i ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Sections */}
      {sections.map((SectionContent, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="snap-start h-screen"
        >
          {SectionContent}
        </div>
      ))}
    </div>
  );
}
