import React from 'react';
import { 
  Facebook, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck,
  Clock
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Change to valid URLs or remove the hash
  const quickLinks = [
    { name: "ទំព័រដើម (Home)", link: "/" }, // Changed from "#" to "/"
    { name: "សេវាកម្ម (Services)", link: "/services" },
    { name: "ផលិតផល (Products)", link: "/products" },
    { name: "គម្រោង (Projects)", link: "/projects" },
    { name: "អំពីយើង (About Us)", link: "/about" }
  ];

  const categories = [
    { name: "WPC Doors", link: "/category/wpc-doors" },
    { name: "Wooden Doors", link: "/category/wooden-doors" },
    { name: "PVC Doors", link: "/category/pvc-doors" },
    { name: "Smart Locks", link: "/category/smart-locks" },
    { name: "Accessories", link: "/category/accessories" }
  ];

  return (
    <footer className="bg-[#111057] text-white pt-20 pb-10 font-['Kantumruy_Pro',sans-serif] overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <img src="./img/logo/logo.png" alt="Company Logo" />
            <p className="text-gray-400 leading-relaxed text-sm">
              យើងគឺជាអ្នកឯកទេសផ្តល់ជូននូវដំណោះស្រាយទ្វារគ្រប់ប្រភេទ ដែលមានគុណភាពខ្ពស់ សោភ័ណភាព និងសុវត្ថិភាពបំផុតសម្រាប់គេហដ្ឋានលោកអ្នក។
            </p>
            <div className="flex gap-4">
              {/* Add actual social media URLs */}
              <a 
                href="https://facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://t.me/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-sky-500 transition-all"
              >
                <Send size={20} />
              </a>
              <a 
                href="mailto:info@yourdomain.com" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-red-500 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div> ព័ត៌មានបន្ថែម
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.link} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 text-sm group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div> ប្រភេទផលិតផល
            </h4>
            <ul className="space-y-4">
              {categories.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.link} 
                    className="text-gray-400 hover:text-white transition-all text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <h4 className="text-lg font-bold mb-6">ទំនាក់ទំនងហាង</h4>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <p className="text-xs text-gray-400 leading-relaxed">
                  ផ្លូវ ២៧១, សង្កាត់ទឹកល្អក់៣, ខណ្ឌទួលគោក, រាជធានីភ្នំពេញ។
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <a href="tel:+85512345678" className="text-sm font-bold hover:text-blue-300">
                  +855 12 345 678
                </a>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <Clock className="text-blue-500 shrink-0" size={20} />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold">Open Daily</p>
                  <p className="text-xs">8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} <span className="text-white font-bold">Wonder Door Industrial</span>. រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-500" />
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Verified Quality</span>
            </div>
            <div className="text-gray-500 text-xs flex gap-4">
              {/* Add actual policy URLs or use buttons if they're just placeholders */}
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button (Decorative Idea) */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="absolute bottom-10 right-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all shadow-2xl active:scale-90"
      >
        <ArrowUpRight className="-rotate-45" size={24} />
      </button>
    </footer>
  );
};

export default Footer;