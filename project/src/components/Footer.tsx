import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://i.ibb.co/X8gskxx/gk1-1-1-removebg-preview.png" alt="GK Overseas Logo" className="h-12" />
              <h3 className="text-xl font-bold">GK Overseas</h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner in overseas education and career guidance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GK Overseas Education. All rights reserved.</p>
        </div>
      </div>

      {/* Single WhatsApp Float Button */}
      <a
        href="https://wa.me/917660893395"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;