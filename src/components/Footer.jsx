// components/Footer.jsx
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Home',
    'Services',
    'Makeup',
    'Hair',
    'Skincare',
    'Brides',
    'Contact'
  ];

  const services = [
    'Professional Makeup',
    'Hair Styling',
    'Skincare Treatments',
    'Hair Cutting',
    'Bridal Packages',
    'Party Makeup',
    'Makeup Lessons'
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-linear-to-b from-gray-900 to-black border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-rose-500 to-purple-600 rounded-full" />
              <span className="text-2xl font-bold bg-linear-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                Éclat Beauty
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Luxury beauty studio offering premium makeup, hair, and skincare 
              services for every occasion. Transforming beauty with elegance 
              and perfection since 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-linear-to-r hover:from-rose-600 hover:to-purple-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-rose-300 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-rose-300 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get beauty tips, offers, and exclusive updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-rose-500"
              />
              <button className="px-6 bg-linear-to-r from-rose-600 to-purple-600 rounded-r-lg text-sm font-semibold hover:from-rose-500 hover:to-purple-500 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-linear-to-r from-transparent via-purple-900 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Éclat Beauty. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-rose-500 mx-1" /> for beauty enthusiasts worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;