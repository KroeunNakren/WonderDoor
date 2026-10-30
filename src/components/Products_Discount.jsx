import { CheckCircle2, ArrowRight, Tag, Clock } from 'lucide-react';

const Product_Discount = () => {
  return (
    <div className="py-20 bg-[#F8FAFC] font-['Kantumruy_Pro',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Sophisticated Copy */}
          <div className="space-y-8 relative">
            {/* Background Accent Decor */}
            <div className="absolute -top-10 -left-10 text-[12rem] font-bold text-gray-100 -z-10 select-none">
              SALE
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full border border-amber-200">
                <Tag size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">ការបញ្ចុះតម្លៃពិសេស (Limited Offer)</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#111057] leading-[1.2]">
                កម្មវិធីលក់ចេញ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                  Clearance Sale
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                បង្កើនសោភ័ណភាពគេហដ្ឋានរបស់អ្នកជាមួយទ្វារឈើប្រណិត និងទ្វារទំនើបៗជាច្រើនប្រភេទ ក្នុងតម្លៃដែលមិនធ្លាប់មានពីមុនមក។
              </p>
            </div>

            {/* Features with Luxury Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { kh: "គ្រប់ប្រភេទផលិតផល", en: "All door types" },
                { kh: "ធានាគុណភាពជូន", en: "Warranty included" },
                { kh: "សេវាដំឡើងជំនាញ", en: "Expert Installation" },
                { kh: "ស្តុកមានកំណត់", en: "Limited Stock" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-green-500 group-hover:bg-[#111057] group-hover:text-white transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111057]">{item.kh}</p>
                    <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-tighter">{item.en}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA and Timer Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button className="flex items-center gap-3 px-10 py-4 bg-[#111057] text-white rounded-xl font-bold shadow-xl shadow-blue-900/20 hover:bg-blue-800 hover:-translate-y-1 transition-all group">
                មើលការបញ្ចុះតម្លៃ (Shop Sale)
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-all" />
              </button>
              
              <div className="flex items-center gap-3 text-amber-600">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center animate-pulse">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tighter">Offers end in</p>
                  <p className="font-mono font-bold">12d : 08h : 45m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Showcase */}
          <div className="relative group">
            {/* Main Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200 to-transparent rounded-[2rem] -z-10 opacity-50 blur-2xl"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white p-4 transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506377585622-bedcbb027afc?q=80&w=2070" 
                  alt="Premium Door" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                
                {/* Floating Discount Badge */}
                <div className="absolute top-6 right-6 w-24 h-24 bg-[#111057] rounded-full flex flex-col items-center justify-center text-white border-4 border-white/20 backdrop-blur-sm shadow-xl animate-bounce">
                  <span className="text-[10px] opacity-70 font-bold uppercase tracking-tighter">Save Up To</span>
                  <span className="text-2xl font-black">50%</span>
                </div>

                {/* Bottom Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-[#111057] font-bold">ទ្វារឈើប្រណិតម៉ូដថ្មី</h4>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Luxury Collection 2024</p>
                    </div>
                    <div className="text-right text-[#111057]">
                      <span className="text-xs line-through opacity-50">$450.00</span>
                      <p className="text-xl font-black text-amber-600">$225.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Dots */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[radial-gradient(#111057_2px,transparent_2px)] [background-size:12px_12px] opacity-20"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product_Discount;