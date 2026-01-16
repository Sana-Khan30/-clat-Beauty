// components/Hero.jsx
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const [particles] = useState(() => [...Array(20)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`,
    opacity: 0.3 + Math.random() * 0.7,
  })));

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background with linear overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-purple-900/20 to-rose-900/10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80')] bg-cover bg-center opacity-20" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute w-0.5 h-0.5 bg-rose-300 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-linear-to-r from-rose-500/10 to-purple-500/10 rounded-full border border-rose-500/20">
          <Sparkles className="w-4 h-4 text-rose-300" />
          <span className="text-sm text-rose-300">Premium Beauty Studio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r from-rose-100 via-purple-100 to-pink-100 bg-clip-text text-transparent">
            Enhancing Beauty
          </span>
          <br />
          <span className="bg-linear-to-r from-rose-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            with Elegance & Perfection
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience luxury beauty transformations curated by our expert artists. 
          From bridal glamour to everyday elegance, we bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-linear-to-r from-rose-600 to-purple-600 rounded-full font-semibold text-white hover:from-rose-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(225,29,72,0.4)]">
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-linear-to-r from-rose-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity" />
          </button>
          
          <button className="px-8 py-4 border-2 border-rose-500/30 rounded-full font-semibold text-rose-300 hover:bg-rose-500/10 hover:border-rose-500/50 transition-all duration-300 transform hover:scale-105">
            Explore Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rose-300 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;