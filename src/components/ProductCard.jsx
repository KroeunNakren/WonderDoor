import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Eye, Search, Filter } from 'lucide-react';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(20);
  const [loading, setLoading] = useState(true);
  const observerTarget = useRef(null);

  // 1. Fetch and Sort Data
  useEffect(() => {
    fetch('/products.json')
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Sort: WPC_Door category first, then alphabetical
        const sortedData = [...data].sort((a, b) => {
          if (a.category === "WPC_Door" && b.category !== "WPC_Door") return -1;
          if (a.category !== "WPC_Door" && b.category === "WPC_Door") return 1;
          return 0;
        });
        setProducts(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  // 2. Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayLimit < products.length) {
          // Delay slightly for smoother feel
          setTimeout(() => {
            setDisplayLimit((prev) => prev + 20);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [products, displayLimit]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="w-12 h-12 border-4 border-[#111057]/20 border-t-[#111057] rounded-full animate-spin"></div>
        <p className="text-[#111057] font-bold animate-pulse">កំពុងផ្ទុកទិន្នន័យ... (Loading...)</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#F8FAFC] font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Filter Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#111057]/5 px-3 py-1 rounded-full text-[#111057] text-xs font-bold uppercase tracking-wider">
              <Filter size={12} /> ផលិតផលទ្វារគុណភាពខ្ពស់
            </div>
            <h2 className="text-[#111057] text-3xl md:text-4xl font-extrabold">
              ទំនិញទាំងអស់ <span className="text-blue-600">({products.length})</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
             <p className="text-sm text-gray-500 hidden sm:block">តម្រៀបតាម: <span className="text-[#111057] font-bold">WPC_Door មុនគេ</span></p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.slice(0, displayLimit).map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(17,16,87,0.1)] transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Labels */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.category === "WPC_Door" && (
                    <span className="bg-[#111057] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg uppercase">
                      Best Seller
                    </span>
                  )}
                </div>

                {/* Hover Quick Actions */}
                <div className="absolute inset-0 bg-[#111057]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white text-[#111057] rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 shadow-xl">
                    <Eye size={22} />
                  </button>
                  <button className="p-3 bg-white text-[#111057] rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 delay-75 shadow-xl">
                    <ShoppingCart size={22} />
                  </button>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest">
                    {product.category || 'General'}
                  </span>
                </div>
                
                <h3 className="text-[#111057] font-bold text-base md:text-lg mb-4 line-clamp-1">
                  {product.title}
                </h3>
                
                {/* SAFE SPECS: using optional chaining and fallback empty array */}
                <div className="space-y-2 mb-6 flex-1">
                  {(product.description || []).slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-gray-500 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                      <span className="font-bold text-[#111057] whitespace-nowrap">{spec.key}:</span>
                      <span className="line-clamp-1">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Button */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold">តម្លៃចាប់ផ្តើម</span>
                    <span className="text-2xl font-black text-[#111057]">
                      ${product.price}
                    </span>
                  </div>
                  <button className="bg-[#111057] text-white px-5 py-3 rounded-2xl text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10 active:scale-95">
                    កុម្ម៉ង់ឥឡូវ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sentinel for Infinite Scroll Loader */}
        <div 
          ref={observerTarget} 
          className="w-full flex justify-center py-20 mt-10"
        >
          {displayLimit < products.length ? (
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#111057] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-[#111057] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-[#111057] rounded-full animate-bounce"></div>
              </div>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-tighter">កំពុងបង្ហាញបន្ថែម...</p>
            </div>
          ) : (
            <div className="text-gray-400 text-sm font-bold border-t border-gray-200 pt-10 w-full text-center">
              អស់ផលិតផលសម្រាប់បង្ហាញហើយ (End of Products)
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;