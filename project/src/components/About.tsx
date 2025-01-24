import React from 'react';
import { Award, Users, Shield, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: 'Experienced Counselors',
      description: 'Our team of expert counselors provides personalized guidance.',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: 'Transparent Service',
      description: 'We believe in complete transparency throughout the process.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: 'Student-centric Approach',
      description: 'Your success and satisfaction are our top priorities.',
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: 'Ethical Practices',
      description: 'We maintain the highest standards of professional ethics.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900">
          About GK Overseas Education
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            At GK Overseas Education, we strive to provide students with comprehensive services that guide them from the initial consultation to settling into their study destinations. We are committed to offering transparent, efficient, and personalized support for studying abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;