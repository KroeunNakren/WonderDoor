import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, ShieldCheck, Truck, 
  Ruler, Share2, Send
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === parseInt(id));
        setProduct(found);
        setActiveImage(found?.image);

        if (found) {
          const related = data
            .filter(p => p.category === found.category && p.id !== found.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading product:", err);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="font-bold text-[#111057]">កំពុងផ្ទុក...</p>
    </div>
  );

  if (!product) return <div className="h-screen flex items-center justify-center font-bold">Product not found</div>;

  return (
    <div className="pt-20 md:pt-28 pb-20 bg-white font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* --- Breadcrumb: Hidden on small mobile to save space --- */}
        <nav className="hidden sm:flex items-center gap-2 text-sm text-gray-400 mb-6 md:mb-10">
          <Link to="/" className="hover:text-[#111057]">Home</Link>
          <ChevronRight size={14} />
          <Link to="/all-products" className="hover:text-[#111057]">Products</Link>
          <ChevronRight size={14} />
          <span className="text-[#111057] font-bold truncate">{product.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-start">
          
          {/* --- LEFT SIDE: Image Gallery (Fixed for Mobile) --- */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="relative aspect-square sm:aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-[#F3F4F6] border border-gray-100 shadow-sm">
              <img 
                src={activeImage} 
                alt={product.title} 
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
            
            {/* Thumbnails: Scrollable on mobile */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
               {[product.image, product.image, product.image].map((img, i) => (
                 <button 
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-blue-600 scale-95' : 'border-transparent opacity-60'}`}
                 >
                   <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                 </button>
               ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: Product Details --- */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-6 md:mb-8">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-[#111057] text-2xl md:text-5xl font-black mt-3 mb-3 leading-tight">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium">(24 Reviews)</span>
              </div>

              
            </div>

            {/* Quick Specs: 2 columns on mobile */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
              <div className="p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl flex items-center gap-3">
                <Ruler className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="text-[9px] uppercase text-gray-400 font-bold">Size</p>
                  <p className="text-xs md:text-sm font-bold">Custom</p>
                </div>
              </div>
              <div className="p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl flex items-center gap-3">
                <ShieldCheck className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="text-[9px] uppercase text-gray-400 font-bold">Warranty</p>
                  <p className="text-xs md:text-sm font-bold">5 Years</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h4 className="font-bold text-[#111057] mb-3 border-b pb-2 text-sm md:text-base">ព័ត៌មានលម្អិត</h4>
              <ul className="space-y-2 md:space-y-3">
                {(product.description || []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 text-xs md:text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span className="font-bold text-[#111057] whitespace-nowrap">{item.key}:</span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions: Sticky/Fixed Bottom on very small screens if needed, but here inside flex */}
            <div className="mt-auto space-y-3">
              <div className="flex gap-3">
                <a 
                  href={`https://t.me/Marynhoeb`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#111057] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-2 md:gap-3 hover:bg-blue-700 transition-all text-sm md:text-base"
                >
                  <Send size={18} /> កុម្ម៉ង់តាម Telegram
                </a>
                <button className="p-4 md:p-5 bg-gray-100 rounded-xl md:rounded-2xl text-[#111057]">
                  <Share2 size={20} />
                </button>
              </div>
              <p className="text-center text-[10px] text-gray-400 font-medium">
                <Truck size={12} className="inline mr-1" /> ដឹកជញ្ជូនឥតគិតថ្លៃសម្រាប់ការបញ្ជាទិញច្រើន
              </p>
            </div>
          </div>
        </div>

        {/* --- Technical Table: Responsive --- */}
        <div className="mt-16 md:mt-24 bg-gray-50 p-6 md:p-12 rounded-[1.5rem] md:rounded-[3rem]">
          <h3 className="text-xl md:text-2xl font-black text-[#111057] mb-6 md:mb-8 text-center md:text-left">លក្ខណៈបច្ចេកទេស</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { label: "Material", val: "High Quality WPC" },
              { label: "Thickness", val: "40mm - 45mm" },
              { label: "Surface", val: "PVC Film / Paint" },
              { label: "Feature", val: "100% Waterproof" }
            ].map((spec, i) => (
              <div key={i} className="flex justify-between border-b border-gray-200 pb-2 text-sm">
                <span className="text-gray-400 font-bold">{spec.label}</span>
                <span className="font-bold text-[#111057]">{spec.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Related Products: 2 columns on mobile --- */}
        <div className="mt-20 md:mt-32">
          <h3 className="text-xl md:text-2xl font-black text-[#111057] mb-6 md:mb-10 text-center md:text-left">ផលិតផលប្រហាក់ប្រហែល</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="bg-white rounded-[1.2rem] md:rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="p-3 md:p-5 flex flex-col flex-1">
                    <h4 className="text-[#111057] font-bold text-xs md:text-sm mb-2 line-clamp-1">{item.title}</h4>
                    <div className="mt-auto flex items-center justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;