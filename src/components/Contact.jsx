// components/Contact.jsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    'Select Service',
    'Professional Makeup',
    'Hair Styling',
    'Skincare Treatment',
    'Hair Cutting',
    'Bridal Makeup',
    'Party Makeup'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
              Book Your Appointment
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your beauty experience? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-linear-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-purple-900/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-900/50 rounded-lg text-white focus:outline-none focus:border-rose-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-900/50 rounded-lg text-white focus:outline-none focus:border-rose-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-900/50 rounded-lg text-white focus:outline-none focus:border-rose-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-900/50 rounded-lg text-white focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-900/50 rounded-lg text-white focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-purple-900/50 rounded-lg text-white focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  placeholder="Tell us about your beauty needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-linear-to-r from-rose-600 to-purple-600 rounded-xl font-semibold text-white hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment Now
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-linear-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-purple-900/30">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-linear-to-br from-rose-600 to-purple-600">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Sun, 8am-10pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-linear-to-br from-rose-600 to-purple-600">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">hello@eclatbeauty.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-linear-to-br from-rose-600 to-purple-600">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Studio Location</h4>
                    <p className="text-gray-400">123 Beauty Avenue</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-linear-to-br from-rose-600 to-purple-600">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Working Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 9am - 8pm</p>
                    <p className="text-gray-400">Saturday - Sunday: 10am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map/Visual */}
            <div className="relative rounded-2xl overflow-hidden h-64">
              <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 to-rose-900/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-rose-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">Visit Our Luxury Studio</p>
                  <p className="text-gray-400 text-sm">By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;