

import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Venkateswarlu Pambha',
    university: 'University of Hertfordshire - UK',
    text: 'GK Overseas made my dream of studying at the University of Hertfordshire a reality. Their guidance throughout the visa process was invaluable.',
  },
  {
    name: 'Meghana Reddy',
    university: 'Northeastern University - USA',
    text: 'The team at GK Overseas is highly professional and dedicated. They helped me secure a scholarship that made my education possible.',
  },
  {
    name: 'Maheswari kodi',
    university: 'Dublin Business School - Ireland',
    text: 'I am grateful for the continuous support from GK Overseas. They went above and beyond to ensure my smooth transition abroad.',
  },
  {
    name: 'Surya Kumar Narne',
    university: 'University of Greenwich - UK',
    text: 'GK Overseas provided exceptional guidance and support throughout my journey. Their expertise made my dream of studying in the UK come true.',
  },
  {
    name: 'Devi Sanjana Gadde',
    university: 'University of Connecticut - USA',
    text: 'The team at GK Overseas was instrumental in helping me achieve my academic goals. Their assistance in securing admission was invaluable.',
  },
  {
    name: 'Ashok Reddy Nimmakayala',
    university: 'Sheffield Hallam University - UK',
    text: 'I am thankful to GK Overseas for their personalized support and expertise. They made my study abroad journey a smooth and successful experience.',
  },
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPosition = 0;
    const cardWidth = slider.offsetWidth;
    const totalWidth = slider.scrollWidth;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= totalWidth - cardWidth) {
        scrollPosition = 0;
      }
      slider.scrollTo(scrollPosition, 0);
    };

    const interval = setInterval(scroll, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Students Say
        </h2>

        <div
          ref={sliderRef}
          className="flex overflow-x-hidden gap-4 sm:gap-6 py-4"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-[85%] sm:w-[60%] md:w-[40%] lg:w-[400px] bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-blue-100"
            >
              <div className="mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900">{testimonial.name}</h3>
                <p className="text-blue-600 text-sm sm:text-base">{testimonial.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
