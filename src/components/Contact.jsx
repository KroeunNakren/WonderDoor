import React from 'react';
import { Phone, Mail, MapPin, Send, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "លេខទូរស័ព្ទ (Phone)",
      value: "+855 12 345 678",
      link: "tel:+85512345678",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "តេឡេក្រាម (Telegram)",
      value: "@your_door_shop",
      link: "https://t.me/yourusername",
      color: "bg-sky-50 text-sky-500"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "ហ្វេសប៊ុក (Facebook)",
      value: "Your Door Store Page",
      link: "https://facebook.com/yourpage",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "អ៊ីមែល (Email)",
      value: "info@yourdomain.com",
      link: "mailto:info@yourdomain.com",
      color: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <section className="py-24 bg-white font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text & Cards */}
          <div>
            <div className="mb-12">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Contact Us</span>
              <h2 className="text-[#111057] text-4xl md:text-5xl font-black mt-3 mb-6">
                ទំនាក់ទំនងមកយើង <br /> <span className="text-gray-400">ដើម្បីសួរតម្លៃ</span>
              </h2>
              <p className="text-gray-500 text-lg">
                ក្រុមការងារយើងនឹងរីករាយក្នុងការផ្តល់ជូននូវការប្រឹក្សាយោបល់ និងការវាស់វែងទំហំទ្វារដល់ទីកន្លែងដោយឥតគិតថ្លៃ។
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <a 
                  href={item.link} 
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-[2rem] border border-gray-100 hover:border-transparent hover:shadow-xl hover:shadow-[#111057]/5 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[#111057] font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm font-medium">{item.value}</p>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="mt-10 p-8 rounded-[2rem] bg-gray-50 border border-gray-100 flex items-center gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                    <Clock className="text-[#111057] w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-[#111057] font-bold">ម៉ោងធ្វើការ (Opening Hours)</h4>
                    <p className="text-gray-500 text-sm">ច័ន្ទ - អាទិត្យ: 8:00 ព្រឹក - 8:00 ល្ងាច</p>
                </div>
            </div>
          </div>

          {/* Right Side: Map & Address Card */}
          <div className="relative">
            <div className="bg-[#111057] rounded-[3rem] p-8 md:p-12 text-white overflow-hidden relative">
              {/* Decorative Circle */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-blue-600 p-3 rounded-xl">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">ទីតាំងហាងយើងខ្ញុំ</h3>
                </div>

                <p className="text-blue-100 text-lg leading-relaxed mb-8 italic">
                  ផ្ទះលេខ ១២៣, ផ្លូវ ២៧១, សង្កាត់ទឹកល្អក់៣, ខណ្ឌទួលគោក, រាជធានីភ្នំពេញ។
                </p>

                {/* Placeholder for Google Map Embed */}
                <div className="w-full h-64 bg-white/10 rounded-[2rem] border border-white/10 flex items-center justify-center overflow-hidden">
                    <iframe 
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.770660344621!2d104.8893491!3d11.5683317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4283f3d%3A0x742b036f01445731!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000" 
                      className="w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                      allowFullScreen="" 
                      loading="lazy"
                    ></iframe>
                </div>

                <button className="w-full mt-8 bg-white text-[#111057] py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl shadow-black/20">
                    បើកគំនូសផែនទី (Open in Google Maps)
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;