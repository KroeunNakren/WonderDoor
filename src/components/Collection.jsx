import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

const Collection = () => {
  const categories = [
    {
      id: 1,
      name: "ទ្វារឈើប្រណិត",
      en: "Luxury Wooden Doors",
      count: "45+ Products",
      image: "./img/collection/collection1.jpg",
      span: "md:col-span-2"
    },
    {
      id: 2,
      name: "ទ្វារបន្ទប់ទឹក PVC",
      en: "Bathroom PVC Doors",
      count: "30+ Products",
      image: "./img/collection/collection2.jpg",
      span: "md:col-span-1"
    },
    {
      id: 3,
      name: "ទ្វារដែកសុវត្ថិភាព",
      en: "Security Steel Doors",
      count: "25+ Products",
      image: "./img/collection/collection3.jpg",
      span: "md:col-span-1"
    },
    {
      id: 4,
      name: "សោរឆ្លាតវៃ",
      en: "Smart Door Locks",
      count: "15+ Products",
      image: "./img/collection/collection4.jpg",
      span: "md:col-span-2"
    }
  ];

  return (
    <section className="py-24 bg-white font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Our Collections</span>
            <h2 className="text-[#111057] text-3xl md:text-5xl font-black mt-2">
              ស្វែងរកម៉ូដទ្វារតាម <br /> <span className="text-gray-400">ប្រភេទផលិតផល</span>
            </h2>
          </div>
          {/* Main Button Link */}
          <Link 
            to="/all-products" 
            className="text-[#111057] font-bold border-b-2 border-[#111057] pb-1 hover:text-blue-600 hover:border-blue-600 transition-all w-fit"
          >
            មើលប្រភេទទាំងអស់
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item) => (
            <Link 
              to="/all-products" 
              state={{ category: item.filter }} // Passes category info to the next page
              key={item.id}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-100 h-[400px] cursor-pointer ${item.span}`}
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111057] via-[#111057]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex justify-between items-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-1">{item.count}</p>
                    <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                    <p className="text-white/60 text-sm uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-700">{item.en}</p>
                  </div>
                  <div className="bg-white text-[#111057] p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-4 border border-white/20 rounded-[2rem] pointer-events-none scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* Brand Stats Integration */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-gray-100">
            <div>
                <p className="text-[#111057] text-3xl font-black">10k+</p>
                <p className="text-gray-400 text-sm">គម្រោងដែលបានដំឡើង</p>
            </div>
            <div>
                <p className="text-[#111057] text-3xl font-black">100%</p>
                <p className="text-gray-400 text-sm">ឈើធម្មជាតិពិតៗ</p>
            </div>
            <div>
                <p className="text-[#111057] text-3xl font-black">25+</p>
                <p className="text-gray-400 text-sm">ឆ្នាំនៃបទពិសោធន៍</p>
            </div>
            <div>
                <p className="text-[#111057] text-3xl font-black">5.0</p>
                <p className="text-gray-400 text-sm">ការវាយតម្លៃពីអតិថិជន</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;