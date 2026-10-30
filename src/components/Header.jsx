import React from 'react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Utility Bar - Dark & Professional */}
      <div className="bg-[#1a1a1a] text-gray-300 py-2 text-sm border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <p className="hidden md:block">Premium Doors for Modern Homes</p>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">📞</span>
              <a href="tel:+123456789" className="hover:text-white transition-colors font-medium">
                Request a Quote: +123 456 789
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="/support" className="hover:text-white transition-colors">Support</a>
            <span className="opacity-30">|</span>
            <a href="https://t.me/yourchannel" className="flex items-center gap-1 text-sky-400 hover:text-sky-300">
              <span>Join Telegram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Elegant & Spacious */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Bold and Architectural */}
          <div className="text-2xl font-bold tracking-tighter text-[#102A6B]">
            DOOR<span className="text-amber-600">PRO</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">
            <a href="/exterior" className="hover:text-[#102A6B] transition-colors">Exterior Doors</a>
            <a href="/interior" className="hover:text-[#102A6B] transition-colors">Interior Doors</a>
            <a href="/custom" className="hover:text-[#102A6B] transition-colors">Custom Designs</a>
            <a href="/catalog" className="hover:text-[#102A6B] transition-colors">Digital Catalog</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-gray-600 font-medium hover:text-[#102A6B]">
              Log In
            </button>
            <button className="bg-[#102A6B] text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-[#0a1d4a] transition-all shadow-md active:scale-95">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;