import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState('All');
  
  // --- NEW STATE FOR PAGINATION ---
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        const wpcDoors = data.filter(p => p.category === "WPC_Door");
        const hardware = data.filter(p => p.category === "Hardware");
        const others = data.filter(p => p.category !== "WPC_Door" && p.category !== "Hardware");
        
        const sortedData = [...wpcDoors, ...hardware, ...others];
        setProducts(sortedData);
        setLoading(false);
      })
      .catch((err) => console.error("Error:", err));
    window.scrollTo(0, 0);
  }, []);

  // Filter Logic
  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // --- GET ONLY THE PRODUCTS WE WANT TO SHOW ---
  const productsToShow = filteredProducts.slice(0, visibleCount);

  // --- SCROLL LISTENER TO LOAD MORE ---
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.offsetHeight
      ) {
        // Load 20 more if there are still products left to show
        if (visibleCount < filteredProducts.length) {
          setVisibleCount(prev => prev + 20);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, filteredProducts.length]);

  // Reset count when category or search changes
  useEffect(() => {
    setVisibleCount(20);
  }, [activeCategory, searchTerm]);

  if (loading) return (
    <div className="py-40 text-center flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="font-bold text-[#111057] animate-pulse">កំពុងរៀបចំផលិតផលជូនលោកអ្នក...</p>
    </div>
  );

  return (
    <section className="py-28 bg-gray-50 font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-[#111057] text-3xl md:text-4xl font-black mb-2">ផលិតផល និងគ្រឿងបន្លាស់</h2>
            <p className="text-gray-500 text-sm">ស្វែងរកទ្វារ និងគ្រឿងបន្លាស់គុណភាពខ្ពស់បំផុត</p>
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="ស្វែងរកឈ្មោះផលិតផល..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto max-w-full mb-10 no-scrollbar">
          {['All', 'WPC_Door', 'Wooden Door', 'Hardware', 'PVC Door'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeCategory === cat 
                ? 'bg-[#111057] text-white shadow-lg' 
                : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {cat === 'Hardware' && <Hammer size={14} />}
              {cat === 'All' ? 'ទាំងអស់' : cat.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsToShow.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-100 block">
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy" // Optimized for scroll
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>

              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">
                  {product.category === 'Hardware' ? 'គ្រឿងបន្លាស់' : product.category}
                </span>
                
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-[#111057] font-bold text-sm md:text-base mb-4 line-clamp-2 h-10 md:h-12">
                    {product.title}
                  </h3>
                </Link>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-bold uppercase">តម្លៃ (Price)</span>
                    <span className="text-xl font-black text-[#111057]">$xx</span>
                  </div>
                  <Link 
                    to={`/product/${product.id}`} 
                    className="p-3 bg-[#111057] text-white rounded-2xl hover:bg-blue-600 transition-all shadow-md active:scale-90"
                  >
                    <ShoppingCart size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LOADING INDICATOR FOR MORE PRODUCTS --- */}
        {visibleCount < filteredProducts.length && (
          <div className="py-10 text-center">
             <div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
             <p className="text-gray-400 text-sm inline-block">កំពុងបង្ហាញផលិតផលបន្ថែម...</p>
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <div className="text-gray-200 mb-4 flex justify-center"><Search size={64} /></div>
            <p className="text-gray-400 font-bold text-lg">មិនមានផលិតផលក្នុងជម្រើសនេះទេ</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;