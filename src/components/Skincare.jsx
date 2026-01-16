// components/Skincare.jsx
import React from 'react';
import { Droplets, Leaf, Shield, Zap } from 'lucide-react';

const Skincare = () => {
  const treatments = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Hydra Facial',
      description: 'Deep cleansing and hydration treatment',
      duration: '60 mins',
      benefits: ['Hydration', 'Detox', 'Glow Boost']
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Organic Facial',
      description: 'Natural ingredients for sensitive skin',
      duration: '75 mins',
      benefits: ['Natural', 'Soothing', 'Revitalizing']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Anti-Aging',
      description: 'Advanced treatment for youthful skin',
      duration: '90 mins',
      benefits: ['Firming', 'Wrinkle Reduction', 'Elasticity']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'LED Therapy',
      description: 'Light therapy for skin rejuvenation',
      duration: '45 mins',
      benefits: ['Collagen Boost', 'Even Tone', 'Healing']
    }
  ];

  return (
    <section id="skincare" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Luxury Skincare
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Experience transformative skincare treatments using premium, 
              scientifically-proven products. Our expert estheticians create 
              personalized routines for radiant, healthy skin.
            </p>
            
            <div className="space-y-6">
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-linear-to-r from-gray-800/30 to-gray-900/30 border border-emerald-900/30 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-linear-to-br from-emerald-500 to-teal-500">
                    <div className="text-white">{treatment.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {treatment.title}
                      </h4>
                      <span className="text-sm text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                        {treatment.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      {treatment.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {treatment.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-emerald-300 bg-emerald-400/10 px-3 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Skincare Treatment"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-emerald-300">95%</div>
                    <div className="text-xs text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-emerald-300">50+</div>
                    <div className="text-xs text-gray-400">Treatments</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-900/80 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-emerald-300">100%</div>
                    <div className="text-xs text-gray-400">Natural Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skincare;