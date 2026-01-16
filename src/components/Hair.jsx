// components/Hair.jsx
import React from 'react';
import { Check } from 'lucide-react';

const Hair = () => {
  const hairServices = [
    {
      title: 'Precision Haircut',
      before: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Custom Styling', 'Face Shape Analysis', 'Modern Techniques']
    },
    {
      title: 'Professional Blowout',
      before: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Smoothing Treatment', 'Volume Boost', 'Long-lasting Style']
    },
    {
      title: 'Hair Coloring',
      before: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Balayage', 'Highlights', 'Color Correction']
    }
  ];

  return (
    <section id="hair" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
              Hair Styling & Care
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your hair with our expert styling, cutting, and coloring services
          </p>
        </div>

        {/* Hair Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hairServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500"
            >
              {/* Before/After Images */}
              <div className="relative mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={service.before}
                      alt="Before"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3">
                      <span className="text-sm font-medium text-gray-300">Before</span>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={service.after}
                      alt="After"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3">
                      <span className="text-sm font-medium text-rose-300">After</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full bg-linear-to-r from-purple-600 to-rose-600 flex items-center justify-center">
                    <span className="text-white font-bold">→</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="w-full py-3 text-sm font-medium bg-linear-to-r from-purple-600/20 to-rose-600/20 rounded-lg text-purple-300 hover:text-white hover:from-purple-600/30 hover:to-rose-600/30 transition-all duration-300">
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hair;