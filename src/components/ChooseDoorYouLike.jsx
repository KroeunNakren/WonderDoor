import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, X, CheckCircle2, ShieldCheck } from 'lucide-react';

const ChooseDoorYouLike = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const scrollRef = useRef(null);

  // 1. Fetch and Filter Data
  useEffect(() => {
    // Ensure products.json is in your /public folder
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        // Filter only WPC_Door category
        const wpcDoors = data.filter(item => item.category === "WPC_Door");
        setProducts(wpcDoors);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  // 2. Manual Scroll Logic
  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 380; 
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (loading) return (
    <div className="py-20 text-center font-['Kantumruy_Pro']">
      <div className="animate-pulse text-[#111057] font-bold tracking-widest">
        កំពុងស្វែងរកទ្វារ WPC...
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white font-['Kantumruy_Pro',sans-serif] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
              Special Category
            </div>
            <h2 className="text-[#111057] text-3xl md:text-5xl font-black italic uppercase">
              ទ្វារ <span className="text-blue-600">WPC_DOOR</span>
            </h2>
            <p className="text-gray-400 font-medium italic">ជម្រើសទ្វារដែលធន់នឹងទឹក និងសត្វល្អិតបានយ៉ាងល្អបំផុត</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-gray-100 text-[#111057] hover:bg-[#111057] hover:text-white transition-all shadow-lg active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-gray-100 text-[#111057] hover:bg-[#111057] hover:text-white transition-all shadow-lg active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* --- Product Scrollable Row --- */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-10 px-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.length > 0 ? products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="min-w-[280px] md:min-w-[340px] group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-[#111057]/10 transition-all duration-500 cursor-pointer scroll-snap-align-start"
            >
              {/* Image & Badge */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5 bg-[#111057] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase">
                  View Detail
                </div>
              </div>

              {/* Product Info Preview */}
              <div className="p-6">
                <h3 className="text-[#111057] font-bold text-lg mb-4 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold">ចាប់ពីតម្លៃ</span>
                   
                  </div>
                  <button className="flex items-center gap-2 bg-[#111057] text-white px-5 py-3 rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95">
                    <ShoppingCart size={18} />
                    <span className="text-xs">កុម្ម៉ង់</span>
                  </button>
                </div>
              </div>
            </div>
          )) : (
              <div className="w-full text-center py-10 text-gray-400">មិនមានផលិតផល WPC សម្រាប់បង្ហាញឡើយ។</div>
          )}
        </div>
      </div>

      {/* --- PAGE DETAIL MODAL (Pop-up) --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-[#111057]/60 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          {/* Modal Card */}
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-20 bg-gray-100 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              <X size={24} />
            </button>

            {/* Left Column: Image */}
            <div className="md:w-1/2 h-[400px] md:h-auto bg-gray-50">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Right Column: Details */}
            <div className="md:w-1/2 p-8 md:p-12 space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Premium Selection</span>
                <h2 className="text-[#111057] text-3xl md:text-4xl font-black">{selectedProduct.title}</h2>
                <div className="flex items-center gap-4">
           
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-lg">IN STOCK</span>
                </div>
              </div>

              <div className="border-y border-gray-100 py-6 space-y-4">
                <h4 className="font-bold text-[#111057] uppercase text-sm tracking-widest">Description & Specs</h4>
                <div className="grid grid-cols-1 gap-3">
                  {(selectedProduct.description || []).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-500 text-sm italic font-medium">
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                      {item.value}
                    </div>
                  ))}
                  <div className="flex items-center gap-3 text-gray-500 text-sm italic font-medium">
                    <ShieldCheck size={18} className="text-blue-500 flex-shrink-0" />
                    ធានាគុណភាពលើការប្រើប្រាស់រយៈពេល ៥ ឆ្នាំ
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
<div className="pt-4 flex flex-col sm:flex-row gap-4">
  <a 
    href="https://t.me/Marynhoeb" 
    target="_blank"
    rel="noopener noreferrer"  // ADD THIS LINE
  >
    <button className="flex-1 bg-[#111057] text-white py-5 px-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-blue-900/20">
      ទំនាក់ទំនងទៅកាន់អ្នកលក់
    </button>
  </a>
  <button className="flex-1 border-2 border-gray-100 text-[#111057] py-5 rounded-2xl font-black hover:bg-gray-50 transition-all">
    សួរតាម Telegram
  </button>
</div>
            </div>
          </div>
        </div>
      )}

      {/* Hide Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default ChooseDoorYouLike;