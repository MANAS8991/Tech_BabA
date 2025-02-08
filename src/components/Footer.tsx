import React from 'react';
import { Mail, Phone, MessageCircle, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>support@techbaba.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-2" />
                <a href="#" className="hover:text-indigo-400">github.com/techbaba</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Return Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Feedback Form */}
          <div>
            <h3 className="text-xl font-bold mb-4">Send Feedback</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2025 Tech BabA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;