import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumbers = ['+91 7660893395', '+91 7995030766'];
  const email = 'gkoverseas.assist@gmail.com';
  const address = 'Springboard School, Rikshaw Center, Prakash Nagar, Narasaraopet, Andhra Pradesh 522601';

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            Have questions or need guidance? Get in touch with us, and we'll help you start your study abroad journey!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                {phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    {phone}
                  </a>
                ))}

                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {email}
                </a>

                <div className="flex items-start text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 mt-1" />
                  <span>{address}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">WhatsApp Us</h3>
              <div className="space-y-4">
                {phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/${phone.replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-green-600"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Chat on WhatsApp ({phone})
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.840154997617!2d80.0462824!3d16.2286553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a81000a7356ef%3A0xf8c23b9b7a06c56d!2sGK%20Overseas%20Education!5e0!3m2!1sen!2sin!4v1737314666405!5m2!1sen!2sin"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;