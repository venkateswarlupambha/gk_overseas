import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const countries = [
  {
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
    description: 'Home to world-renowned universities and rich cultural heritage',
    flag: '🇬🇧'
  },
  {
    name: 'United States',
    image: 'https://i.ibb.co/xzyDdKR/usa.webp',
    description: 'Leading destination for international students with diverse opportunities',
    flag: '🇺🇸'
  },
  {
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225',
    description: 'Known for quality education and excellent quality of life',
    flag: '🇨🇦'
  },
  {
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
    description: 'Top-tier education with a fantastic lifestyle',
    flag: '🇦🇺'
  },
  {
    name: 'New Zealand',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad',
    description: 'Excellence in education with stunning natural beauty',
    flag: '🇳🇿'
  },
  {
    name: 'Ireland',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e',
    description: 'Rich cultural heritage with modern educational facilities',
    flag: '🇮🇪'
  }
];

const Countries = () => {
  const navigate = useNavigate();

  const handleCountryClick = (countryName: string) => {
    navigate(`/universities/${countryName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <section id="countries" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Study Destinations
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            Choose from top study destinations worldwide. Each country offers unique opportunities and experiences for international students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              onClick={() => handleCountryClick(country.name)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 text-4xl">
                  {country.flag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {country.name}
                </h3>
                <p className="text-gray-600">
                  {country.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="text-blue-600 group-hover:text-blue-700 font-medium inline-flex items-center">
                    Explore Universities
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;