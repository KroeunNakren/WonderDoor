import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, MoveRight, X, CheckCircle2, ShieldCheck } from 'lucide-react';

const ElegantInteriorDoors = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        // Filtering only Wooden Doors for this elegant section
        const elegantDoors = data.filter(item => item.category === "Wooden Door").slice(0, 3);
        setProducts(elegantDoors);
        setLoading(false);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  if (loading) return null;

  return (
    <section className="py-24 bg-[#FCFCFD] font-['Kantumruy_Pro',sans-serif] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-blue-600 mb-4">
              <Sparkles size={20} />
              <span className="uppercase tracking-[0.3em] text-xs font-black">Premium Collection</span>
            </div>
            <h2 className="text-[#111057] text-4xl md:text-6xl font-black leading-tight">
              សោភ័ណភាពនៃ <br />
              <span className="text-gray-300 italic">ទ្វារឈើប្រណិត</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-gray-500 mb-6 md:text-right max-w-xs">
              លើកកម្ពស់សោភ័ណភាពគេហដ្ឋានរបស់អ្នក ជាមួយនឹងម៉ូដទ្វារឈើបែបអឺរ៉ុប ទាន់សម័យ និងរឹងមាំ។
            </p>
            <button className="group flex items-center gap-3 bg-[#111057] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-[#111057]/20">
              មើលម៉ូដឈើទាំងអស់
              <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Large Feature Card */}
          {products[0] && (
            <div 
              onClick={() => setSelectedProduct(products[0])}
              className="lg:col-span-7 group relative rounded-[3rem] overflow-hidden h-[600px] shadow-2xl cursor-pointer"
            >
              <img 
                src={products[0].image} 
                alt={products[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111057]/90 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs mb-4 inline-block">Featured Design</span>
                <h3 className="text-3xl font-bold mb-2">{products[0].title}</h3>
                <p className="text-white/70 mb-6 max-w-md italic">រចនាឡើងយ៉ាងសម្រិតសម្រាំងបំផុត ដើម្បីផ្តល់នូវភាពថ្លៃថ្នូរសម្រាប់គេហដ្ឋានទំនើប។</p>
                
              </div>
            </div>
          )}

          {/* Side Column Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {products.slice(1, 3).map((product) => (
              <div 
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="flex-1 group relative rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 p-4 flex gap-6 hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="w-40 h-full rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1 pr-4">
                  <h4 className="text-[#111057] font-bold text-xl mb-1 line-clamp-1">{product.title}</h4>
                  
                  <button className="w-fit flex items-center gap-2 text-[#111057] font-bold text-sm group-hover:text-blue-600 transition-colors">
                    Details <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  </button>
                </div>
              </div>
            ))}

            {/* Aesthetic Quote Box */}
            <div className="flex-1 bg-[#111057] rounded-[2.5rem] p-10 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles size={80} />
                </div>
                <p className="text-xl font-medium leading-relaxed italic opacity-90 mb-6">
                    "ទ្វារគឺជាចំណុចចាប់ផ្តើមនៃភាពកក់ក្តៅក្នុងផ្ទះ"
                </p>
                <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-blue-500" />
                    <span className="text-xs tracking-widest uppercase font-bold text-blue-400">Door Specialist</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PAGE DETAIL MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div className="absolute inset-0 bg-[#111057]/60 backdrop-blur-md" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 z-20 bg-gray-100 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all">
              <X size={24} />
            </button>
            <div className="md:w-1/2 h-[400px] md:h-auto bg-gray-50">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Wooden Premium Collection</span>
                <h2 className="text-[#111057] text-3xl md:text-4xl font-black">{selectedProduct.title}</h2>
                
              </div>
              <div className="border-y border-gray-100 py-6 space-y-4">
                <h4 className="font-bold text-[#111057]">Specifications:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {(selectedProduct.description || []).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-500 text-sm">
                      <CheckCircle2 size={18} className="text-green-500" />
                      {item.value}
                    </div>
                  ))}
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <ShieldCheck size={18} className="text-blue-500" />
                    ធានាលើការតំឡើង និងគុណភាពឈើ
                  </div>
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://t.me/Marynhoeb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="flex-1 bg-[#111057] text-white py-4 px-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20">
                    ទំនាក់ទំនងទៅកាន់អ្នកលក់
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ElegantInteriorDoors;