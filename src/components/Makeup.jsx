// components/Makeup.jsx
import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const Makeup = () => {
  const makeupStyles = [
    {
      title: 'Party Makeup',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Glamorous looks for special occasions',
      features: ['Smokey Eyes', 'Bold Lips', 'Contouring']
    },
    {
      title: 'Bridal Makeup',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Timeless elegance for your wedding day',
      features: ['Long-lasting', 'Photoshoot Ready', 'Custom Design']
    },
    {
      title: 'Natural Makeup',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Subtle enhancement for everyday wear',
      features: ['Light Coverage', 'No-makeup Look', 'Skin-focused']
    },
    {
      title: 'Glam Makeup',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Bold and dramatic artistic expressions',
      features: ['Editorial Style', 'Creative Colors', 'High Fashion']
    }
  ];

  return (
    <section id="makeup" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
              Makeup Artistry
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transformative makeup styles crafted by our expert artists for every occasion
          </p>
        </div>

        {/* Makeup Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {makeupStyles.map((style, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-linear-to-b from-gray-800/50 to-gray-900/50 border border-purple-900/30 hover:border-rose-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {/* Premium Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 px-3 py-1 bg-linear-to-r from-rose-600 to-pink-600 rounded-full">
                    <Star className="w-3 h-3" />
                    <span className="text-xs font-medium">Premium</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-rose-300 transition-colors">
                  {style.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {style.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {style.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <ChevronRight className="w-4 h-4 text-rose-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full py-3 text-sm font-medium bg-linear-to-r from-rose-600/20 to-pink-600/20 rounded-lg text-rose-300 hover:text-white hover:from-rose-600/30 hover:to-pink-600/30 transition-all duration-300">
                  Book This Style
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Makeup;