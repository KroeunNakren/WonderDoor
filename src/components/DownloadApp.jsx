import React from 'react';
import { Apple, PlayCircle, Zap, QrCode } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden font-['Kantumruy_Pro',sans-serif]">
      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(6deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#111057] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/5">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 animate-pulse-slow"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 md:p-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-blue-300 text-xs font-bold uppercase tracking-widest">
                <Zap size={16} className="fill-current" /> បច្ចេកវិទ្យាទំនើបក្នុងដៃអ្នក
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                ទាញយកកម្មវិធី <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Wonder Door Industrial
                </span> ឥឡូវនេះ
              </h2>

              <p className="text-blue-100/80 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                ស្វែងរកម៉ូតទ្វារថ្មីៗ មើលរូបភាពទ្វារក្នុងផ្ទះរបស់អ្នកផ្ទាល់តាមរយៈបច្ចេកវិទ្យា AR។
              </p>

              {/* App Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                
                {/* Android - With QR Code Hover Feature */}
                <div className="relative group">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.wonderdoor.app&hl=en" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white text-[#111057] px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-blue-50 hover:scale-105 active:scale-95 shadow-xl"
                  >
                    <PlayCircle size={32} />
                    <div className="text-left leading-none">
                      <p className="text-[10px] uppercase font-bold opacity-60 mb-1">Get it on</p>
                      <p className="text-xl">Google Play</p>
                    </div>
                  </a>

                  {/* --- QR CODE POPUP --- */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center border border-gray-100">
                      <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100">
                        {/* Replace this URL with your actual QR Code image */}
                        <img 
                          src="./image/QRApp/qr.png" 
                          alt="Play Store QR Code"
                          className="w-28 h-28"
                        />
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-[#111057]">
                        <QrCode size={14} />
                        <span className="text-[10px] font-black uppercase tracking-wider">Scan to Install</span>
                      </div>
                      {/* Triangle Pointer */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
                    </div>
                  </div>
                </div>

                {/* iOS - Coming Soon */}
                <div className="relative group cursor-not-allowed">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold text-white/20 grayscale">
                    <Apple size={32} />
                    <div className="text-left leading-none">
                      <p className="text-[10px] uppercase font-bold opacity-40 mb-1">Download on</p>
                      <p className="text-xl">App Store</p>
                    </div>
                  </div>
                  <span className="absolute -top-3 -right-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter shadow-xl rotate-12 animate-pulse">
                    Coming Soon
                  </span>
                </div>

              </div>
            </div>

            {/* Right Content: Phone Mockup */}
            <div className="flex-1 relative mt-10 lg:mt-0">
              <div className="relative z-10 w-[260px] md:w-[300px] mx-auto animate-float">
                <div className="absolute inset-0 bg-blue-500/40 blur-[80px] rounded-full animate-pulse-slow"></div>
                <div className="relative p-2 bg-white/10 rounded-[3.5rem] backdrop-blur-sm border border-white/20 shadow-2xl">
                  <img 
                    src="./img/posterDownloadApp/posterApp.jpg" 
                    alt="Wonder Door Android App" 
                    className="rounded-[2.8rem]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;