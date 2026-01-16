// components/Brides.jsx
import React from 'react';
import { Crown, Calendar, Star, Gift } from 'lucide-react';

const Brides = () => {
  const packages = [
    {
      title: 'Classic Bride',
      price: '$899',
      features: [
        'Trial Makeup Session',
        'Wedding Day Makeup',
        'Bridal Hair Styling',
        'Touch-up Kit',
        '6 Hours Coverage'
      ],
      popular: false
    },
    {
      title: 'Premium Bride',
      price: '$1299',
      features: [
        'Two Trial Sessions',
        'Full Wedding Makeup',
        'Bridal Party Discount',
        'Luxury Products',
        'Full Day Coverage',
        'Emergency Kit',
        'Pre-wedding Skincare'
      ],
      popular: true
    },
    {
      title: 'Royal Bride',
      price: '$1999',
      features: [
        'Unlimited Trials',
        'Complete Bridal Party',
        'Destination Ready',
        'VIP Products',
        '24/7 Support',
        'Custom Fragrance',
        'Luxury Transportation',
        'Photo Shoot Ready'
      ],
      popular: false
    }
  ];

  return (
    <section id="brides" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-purple-900/10 to-gray-900" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Crown className="w-6 h-6 text-rose-400" />
            <span className="text-rose-400 font-semibold">For The Bride</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-rose-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Your Perfect Wedding Day
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete bridal beauty packages designed to make you feel absolutely 
            stunning on your special day
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
                pkg.popular
                  ? 'bg-linear-to-b from-gray-800 to-gray-900 border-rose-500/50 shadow-[0_20px_40px_rgba(225,29,72,0.2)]'
                  : 'bg-linear-to-b from-gray-800/50 to-gray-900/50 border-purple-900/30'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-6 py-1.5 bg-linear-to-r from-rose-600 to-pink-600 rounded-full flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-4xl font-bold bg-linear-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400">/ package</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-rose-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                pkg.popular
                  ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white hover:shadow-[0_0_30px_rgba(225,29,72,0.5)]'
                  : 'bg-linear-to-r from-rose-600/20 to-pink-600/20 text-rose-300 hover:text-white hover:from-rose-600/30 hover:to-pink-600/30'
              }`}>
                Book This Package
              </button>

              {/* Gift Icon for Royal Package */}
              {index === 2 && (
                <div className="absolute -top-2 -right-2">
                  <div className="p-2 rounded-full bg-linear-to-r from-purple-600 to-rose-600">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-rose-400" />
              <span>Free Consultation</span>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-rose-400" />
              <span>Certified Artists</span>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-rose-400" />
              <span>Luxury Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brides;