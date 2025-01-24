import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services does GK Overseas Education provide?",
    answer: "We offer comprehensive study abroad services including visa assistance, university applications, IELTS/GRE preparation, scholarship guidance, loan assistance, and post-arrival support."
  },
  {
    question: "Which countries can I study in through GK Overseas?",
    answer: "We assist students in pursuing education in the UK, USA, Canada, Australia, New Zealand, and Ireland. Each destination offers unique opportunities and advantages for international students."
  },
  {
    question: "How long does the visa process take?",
    answer: "The visa processing time varies by country and can take anywhere from 2-12 weeks. We recommend starting the process well in advance of your intended departure date."
  },
  {
    question: "Do you provide scholarship assistance?",
    answer: "Yes, we help students identify and apply for various scholarships offered by universities and other organizations. Our team guides you through the entire application process."
  },
  {
    question: "What are the eligibility requirements for studying abroad?",
    answer: "Requirements vary by country and institution but generally include academic qualifications, language proficiency (IELTS/TOEFL), and financial documentation. Contact us for specific requirements."
  },
  {
    question: "Do you provide post-landing services?",
    answer: "Yes, we offer comprehensive post-landing support including accommodation assistance, airport pickup, bank account setup, and general guidance to help you settle in your new country."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-md">
              <button
                className="w-full flex items-center justify-between p-4 sm:p-6 bg-white rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left font-semibold text-sm sm:text-base md:text-lg text-primary-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0 ml-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-1 sm:mt-2 px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 rounded-b-lg border-t border-primary-100">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
