import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';

const ShowRoom = () => {
  const showroomData = {
    title: "ទស្សនាបន្ទប់តាំងបង្ហាញរបស់យើង",
    subtitle: "Experience Luxury & Quality in Person",
    address: "ផ្លូវលេខ ២៧១, សង្កាត់បឹងទំពុន, ខណ្ឌមានជ័យ, រាជធានីភ្នំពេញ",
    hours: "ច័ន្ទ - អាទិត្យ | 8:00 AM - 8:00 PM",
    phone: "012 345 678 / 098 765 432",
    mapUrl: "https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.2893741260527!2d104.86533307682666!3d11.531087444817103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951004e63151b%3A0x4ea8fb622647813b!2sWonder%20Door%20Industrial!5e0!3m2!1sen!2skh!4v1766551342130!5m2!1sen!2skh"
  };

  // List of images. If your FB link is broken, use reliable placeholder links or local assets.
  const galleryImages = [
    "./img/slideshow/slide1.jpg",
    "./img/slideshow/slide2.jpg",
    "./img/slideshow/slide3.jpg",
    "./img/slideshow/slide4.jpg" 
  ];

  return (
    <section className="py-20 bg-white font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <MapPin size={14} /> ទីតាំងហាងផ្ទាល់
          </div>
          <h2 className="text-[#111057] text-3xl md:text-5xl font-black mb-4">
            {showroomData.title}
          </h2>
          <p className="text-gray-400 font-medium tracking-wide">{showroomData.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Information Card */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-[#111057] p-8 md:p-10 rounded-[2.5rem] text-white h-full shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150"></div>
              
              <h3 className="text-2xl font-bold mb-10 relative z-10">ព័ត៌មានទំនាក់ទំនង</h3>

              <div className="space-y-8 relative z-10">
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl h-fit">
                    <Navigation className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-black uppercase mb-1">អាសយដ្ឋាន</p>
                    <p className="text-sm leading-relaxed opacity-90">{showroomData.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl h-fit">
                    <Clock className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-black uppercase mb-1">ម៉ោងធ្វើការ</p>
                    <p className="text-sm opacity-90">{showroomData.hours}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl h-fit">
                    <Phone className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-black uppercase mb-1">លេខទូរស័ព្ទ</p>
                    <p className="text-sm opacity-90">{showroomData.phone}</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/G4kQjA1TEfJXYo7U7" 
                target="_blank" 
                rel="noreferrer"
                className="mt-12 w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all"
              >
                បើកក្នុង Google Maps <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:w-2/3 h-[450px] lg:h-auto min-h-[450px]">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-[12px] border-gray-50 shadow-inner relative">
              <iframe 
                src={showroomData.mapUrl}
                className="w-full h-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Wonder Door Showroom Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Gallery Section - This is the part you were asking about */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((imgUrl, i) => (
            <div key={i} className="h-40 rounded-[2rem] overflow-hidden bg-gray-100 group relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
               <img 
                src={imgUrl} 
                alt={`Showroom View ${i + 1}`} 
                className="w-full h-full object-cover  group-hover:scale-125 transition-all duration-700"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/500x400?text=Image+Not+Found'; }}
               />
               <div className="absolute inset-0 bg-[#111057]/0 group-hover:bg-[#111057]/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowRoom;