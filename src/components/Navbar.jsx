// components/Navbar.jsx
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = ['Home', 'Services', 'Makeup', 'Hair', 'Skincare', 'Brides', 'Contact'];

  const searchData = [
    { category: 'Services', keywords: ['services', 'salon', 'bridal makeup', 'facial', 'beauty services'], sectionId: 'services' },
    { category: 'Makeup', keywords: ['makeup', 'cosmetics', 'lipstick', 'foundation'], sectionId: 'makeup' },
    { category: 'Hair', keywords: ['hair', 'hair care', 'hair styles', 'hair treatment', 'keratin'], sectionId: 'hair' },
    { category: 'Skincare', keywords: ['skincare', 'skin care', 'facial treatment'], sectionId: 'skincare' },
    { category: 'Brides', keywords: ['bride', 'bridal', 'bridal makeup'], sectionId: 'brides' }
  ];

  const filteredSuggestions = searchData.filter(item =>
    item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSuggestionClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setSearchQuery('');
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-lg z-50 border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-br from-rose-500 to-purple-600 rounded-full" />
              <span className="text-xl font-bold bg-linear-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                Éclat Beauty
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-rose-300 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]"
              >
                {item}
              </a>
            ))}
            
            {/* Search Bar - Desktop */}
            <div className="relative ml-4">
              <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-2 border border-purple-900/50">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-48 text-sm placeholder-gray-500"
                />
              </div>
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg shadow-lg border border-purple-900/30 max-h-60 overflow-y-auto z-50">
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors"
                        onClick={() => handleSuggestionClick(item.sectionId)}
                      >
                        {item.category}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">No results found</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-4">
            <div className="relative">
              <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-3 border border-purple-900/50">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search makeup, hair, skincare..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-full text-sm placeholder-gray-500"
                />
              </div>
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg shadow-lg border border-purple-900/30 max-h-60 overflow-y-auto z-50">
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-white transition-colors"
                        onClick={() => handleSuggestionClick(item.sectionId)}
                      >
                        {item.category}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">No results found</div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-rose-300 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;