import React from 'react';


const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-6xl mx-auto">
        <div className="pt-20 pb-5"> {/* Added padding-top and padding-bottom here */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-5 md:mb-8 text-white leading-tight tracking-tight">
            Your Gateway to <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-secondary-200">
              Global Education
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 sm:mb-6 md:mb-8 text-primary-100/90 max-w-3xl mx-auto leading-relaxed">
            Helping you study abroad with confidence. Trusted visa assistance, career guidance, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="#services"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium transition duration-300 ease-out border-2 border-white rounded-full shadow-md text-base sm:text-lg"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:translate-x-0">
                <span className="mr-2">Explore Now</span> →
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full">
                Get Started
              </span>
              <span className="relative invisible">Get Started</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-primary-900 bg-white rounded-full hover:bg-primary-50 transition-colors duration-300 shadow-md hover:shadow-lg text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
