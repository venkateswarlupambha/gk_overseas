import React from 'react';
import { Import as Passport, Wallet, BookOpen, GraduationCap, Users, FileText, Building2, Award, Plane, Home, Map, Briefcase, Globe, FileCheck, Heart, HelpCircle } from 'lucide-react';

const services = [
  { icon: <Passport />, title: 'Visa Assistance', description: 'Comprehensive support throughout the visa process.' },
  { icon: <Wallet />, title: 'Loan Assistance', description: 'Guidance on securing educational loans for your studies.' },
  { icon: <BookOpen />, title: 'IELTS Preparation', description: 'Specialized training to help you ace the IELTS exam.' },
  { icon: <GraduationCap />, title: 'GRE Coaching', description: 'Expert GRE coaching to help you perform well in the exam.' },
  { icon: <Users />, title: 'Mock Interviews for CAS', description: 'Prepare for your Confirmation of Acceptance for Studies interviews.' },
  { icon: <FileText />, title: 'SOP & LOR Assistance', description: 'Craft the perfect Statement of Purpose and Letters of Recommendation.' },
  { icon: <Building2 />, title: 'University Application', description: 'Help with applying to the best universities worldwide.' },
  { icon: <Award />, title: 'Scholarship Assistance', description: 'Find scholarships to ease your financial burden.' },
  { icon: <Plane />, title: 'Post-Arrival Services', description: 'Assistance with accommodation, travel, and settling down.' },
  { icon: <Home />, title: 'Accommodation', description: 'Help in securing safe and affordable accommodation.' },
  { icon: <Map />, title: 'Travel & Flight Booking', description: 'Support with your travel arrangements and flight bookings.' },
  { icon: <Briefcase />, title: 'Career Counseling', description: 'Professional career advice for international students.' },
  { icon: <Globe />, title: 'Cultural Orientation', description: 'Learn about the culture and lifestyle in your destination country.' },
  { icon: <FileCheck />, title: 'Work Permit Assistance', description: 'Guidance on work permits after graduation.' },
  { icon: <Heart />, title: 'Health Insurance', description: 'Assistance with obtaining required health insurance.' },
  { icon: <HelpCircle />, title: 'Study Abroad Consultation', description: 'Personalized guidance for your study abroad journey.' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900">
          Our Services
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            Explore our services designed to simplify your journey to studying abroad. From visa assistance to settling in your new country, we offer everything you need to make your study abroad experience smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-100 hover:border-primary-300"
            >
              <div className="text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#contact"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group"
              >
                Learn More
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;