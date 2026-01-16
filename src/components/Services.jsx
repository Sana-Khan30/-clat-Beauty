// components/Services.jsx
import React from 'react';
import { Brush, Scissors, Sparkles, Heart, UserCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: 'Professional Makeup',
      description: 'Expert makeup artistry for every occasion, using premium cosmetic brands.',
      linear: 'from-rose-500 to-pink-500'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Hair Styling',
      description: 'Transformative hair styling and professional blowouts for any event.',
      linear: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Skincare Treatments',
      description: 'Luxury facials and personalized skincare routines for radiant skin.',
      linear: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Hair Cutting',
      description: 'Precision haircuts and modern hairstyling by certified professionals.',
      linear: 'from-violet-500 to-purple-500'
    },
    {
      icon: <UserCircle className="w-8 h-8" />,
      title: 'Bridal Makeup',
      description: 'Complete bridal beauty packages for your perfect wedding day.',
      linear: 'from-rose-600 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
              Our Premium Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience excellence with our comprehensive range of beauty services, 
            delivered by certified professionals using top-tier products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-purple-900/30 hover:border-rose-500/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(225,29,72,0.1)]"
            >
              {/* Background linear effect */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.linear} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative mb-6 inline-flex p-3 rounded-xl bg-linear-to-br ${service.linear}`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-6 left-6 right-6 h-px bg-linear-to-r from-transparent via-rose-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-linear-to-r from-rose-600/20 to-purple-600/20 rounded-full font-semibold text-white border border-rose-500/30 hover:border-rose-500/50 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">View All Services</span>
            <div className="absolute inset-0 bg-linear-to-r from-rose-600/10 to-purple-600/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;