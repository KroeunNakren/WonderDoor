import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Menu, X, Search, 
  MapPin, LayoutGrid, ArrowRight 
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // --- Search States ---
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  
  const location = useLocation();
  const searchRef = useRef(null);

  // 1. Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Fetch Products for Search Logic
  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Error loading products for search:", err));
  }, []);

  // 3. Live Filter Logic
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = allProducts.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6); // Limit to top 6 results
      setFilteredResults(results);
    }
  }, [searchQuery, allProducts]);

  // 4. Close Search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 5. Close Mobile Menu on Route Change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery("");
  }, [location]);

  const pages = [
    { name: 'ទំព័រដើម', en: 'Home', link: '/' },
    { name: 'ផលិតផល', en: 'Collections', link: '/all-products' },
    { name: 'ភ្ញៀវសំខាន់ៗ', en: 'Cutomers', link: '/customers' },
    { name: 'ការបញ្ចុះតម្លៃ', en: 'Offers', link: '/products-promotion', badge: 'New' },
    { name: 'អំពីយើង', en: 'Our Story', link: '/about-us' },
    { name: 'បន្ទប់តាំងបង្ហាញ', en: 'Our Showroom', link: '/our-showroom' },
  ];

  return (
    <header className="fixed w-full z-[100] transition-all duration-500 font-['Kantumruy_Pro',sans-serif]">
      {/* --- Top Minimal Bar --- */}
      <div className={`bg-[#111057] text-white overflow-hidden transition-all duration-300 ${isScrolled ? 'h-0' : 'h-10'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-[11px] uppercase tracking-widest font-bold">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +855 16 504 998
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin size={12} className="text-blue-400" /> Phnom Penh
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-blue-400 transition-colors">KH</button>
            <span className="w-[1px] h-3 bg-white/20"></span>
            <button className="hover:text-blue-400 transition-colors">EN</button>
          </div>
        </div>
      </div>

      {/* --- Main Glass Navbar --- */}
      <div className="px-4 py-3 sm:px-6">
        <nav className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl 
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg border border-white/20 py-2' 
            : 'bg-white py-4 shadow-sm'}`}
        >
          <div className="px-6 flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link to="/">
                <img 
                  src="./img/logo/logo.png" 
                  alt="Logo" 
                  className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`} 
                />
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-1">
                {pages.map((page) => (
                  <Link
                    key={page.en}
                    to={page.link}
                    className={`group px-4 py-2 rounded-xl transition-all relative ${
                        location.pathname === page.link ? 'bg-[#111057]/5' : 'hover:bg-[#111057]/5'
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className={`text-sm font-bold leading-tight ${location.pathname === page.link ? 'text-blue-600' : 'text-[#111057]'}`}>
                        {page.name}
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-tighter">{page.en}</span>
                    </div>
                    {page.badge && (
                      <span className="absolute -top-1 -right-0.5 bg-blue-600 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                        {page.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions Area */}
            <div className="flex items-center gap-2">
              
              {/* --- SEARCH SYSTEM --- */}
              <div className="relative" ref={searchRef}>
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2.5 rounded-full transition-all ${isSearchOpen ? 'bg-blue-600 text-white scale-110' : 'text-[#111057] hover:bg-gray-100'}`}
                >
                  {isSearchOpen ? <X size={20} /> : <Search size={20} strokeWidth={2.5} />}
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-4 w-[320px] md:w-[480px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          autoFocus
                          type="text"
                          placeholder="ស្វែងរកផលិតផលនៅទីនេះ..."
                          className="w-full pl-12 pr-4 py-3 bg-white rounded-xl outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 transition-all font-medium text-[#111057]"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="p-2 max-h-[420px] overflow-y-auto">
                      {filteredResults.length > 0 ? (
                        <div className="grid grid-cols-1 gap-1">
                          {filteredResults.map((product) => (
                            <Link 
                              key={product.id}
                              to={`/product/${product.id}`}
                              className="flex items-center gap-4 p-3 hover:bg-blue-50/50 rounded-2xl transition-all group"
                            >
                              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-bold text-[#111057] group-hover:text-blue-600 line-clamp-1">{product.title}</h4>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md uppercase font-bold">{product.category}</span>
                                  
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      ) : searchQuery.length > 0 ? (
                        <div className="py-12 text-center">
                           <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Search size={20} className="text-gray-400" />
                           </div>
                           <p className="text-gray-500 text-sm font-medium">មិនមានលទ្ធផលសម្រាប់ "{searchQuery}"</p>
                        </div>
                      ) : (
                        <div className="py-12 text-center text-gray-400">
                          <p className="text-sm italic">វាយឈ្មោះផលិតផលដើម្បីស្វែងរក...</p>
                        </div>
                      )}
                    </div>
                    
                    {filteredResults.length > 0 && (
                      <Link 
                        to="/all-products"
                        className="block w-full py-4 bg-gray-50 text-center text-xs font-bold text-[#111057] hover:text-blue-600 transition-colors"
                      >
                        មើលផលិតផលទាំងអស់
                      </Link>
                    )}
                  </div>
                )}
              </div>

              <div className="hidden sm:block h-6 w-[1px] bg-gray-200 mx-1"></div>

              {/* Desktop Contact Button */}
              <a 
                href="https://t.me/Marynhoeb" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="hidden md:flex items-center gap-3 bg-[#111057] text-white pl-5 pr-2 py-2 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-[#111057]/20 group">
                  <span className="text-sm font-bold tracking-wide">Contact</span>
                  <div className="bg-white/10 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </a>

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 text-[#111057] hover:bg-gray-100 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* --- Mobile Sidebar Overlay --- */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-[#111057]/40 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex items-center justify-between border-b">
            <img src="./img/logo/logo.png" alt="Logo" className="h-8" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full text-[#111057]">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Main Navigation</p>
            {pages.map((page) => (
              <Link key={page.en} to={page.link} className="flex items-center justify-between p-4 rounded-2xl hover:bg-blue-50 text-[#111057] transition-all group">
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{page.name}</span>
                  <span className="text-xs text-gray-400 uppercase">{page.en}</span>
                </div>
                <ChevronDown size={18} className="-rotate-90 text-gray-300 group-hover:text-blue-600 transition-colors" />
              </Link>
            ))}
          </div>

          <div className="p-6 bg-gray-50 border-t">
            <Link to="/all-products" className="w-full bg-[#111057] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all">
              <LayoutGrid size={18} />
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;