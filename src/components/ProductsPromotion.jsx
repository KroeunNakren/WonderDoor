import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPromotion = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  // Mock Countdown Logic
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-[#111057] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content */}
            <div className="text-white space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/30 px-4 py-2 rounded-full text-blue-200 text-xs md:text-sm font-bold uppercase tracking-widest">
                <Sparkles size={16} /> ការផ្តល់ជូនពិសេសប្រចាំខែ
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                បញ្ចុះតម្លៃរហូតដល់ <span className="text-blue-400">30%</span> <br /> លើគ្រប់ប្រភេទទ្វារ WPC
              </h2>
              
              <p className="text-gray-300 text-sm md:text-lg max-w-lg mx-auto lg:mx-0">
                បង្កើនសម្រស់គេហដ្ឋានរបស់អ្នកជាមួយទ្វារគុណភាពខ្ពស់ ធន់នឹងទឹក និងការពារសត្វល្អិត ស៊ីវិល័យ និងរឹងមាំបំផុត។
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center lg:justify-start gap-4 md:gap-6 py-4">
                {[
                  { label: 'ថ្ងៃ', value: timeLeft.days },
                  { label: 'ម៉ោង', value: timeLeft.hours },
                  { label: 'នាទី', value: timeLeft.minutes },
                  { label: 'វិនាទី', value: timeLeft.seconds }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black text-white">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase mt-2 block tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link 
                  to="/all-products" 
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 group"
                >
                  កុម្ម៉ង់ឥឡូវនេះ <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side: Featured Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-2xl group-hover:bg-blue-600/30 transition-all" />
              <div className="relative aspect-[4/5] md:aspect-square bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-sm">
                <img 
                  src="https://scontent.fpnh22-2.fna.fbcdn.net/v/t39.30808-6/539131570_122227129408171065_5252196760951793413_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cQSDoRXgS3EQ7kNvwGxanNX&_nc_oc=Adn5qL1Na_rVvtb_pmcdOLN5F90ZsFYjGP4t0QxoAODBXiVN5dvXaTqa2Pg0LfiUz28&_nc_zt=23&_nc_ht=scontent.fpnh22-2.fna&_nc_gid=cH2sOqWrmsRhg8ipo1oy6g&oh=00_AfqLtG4YRzsZFUUvz-Xd4VEi23aBwlqN6UT7E9DVk6xVwQ&oe=695D1637" 
                  alt="Promotion Door" 
                  className="w-full h-full object-cover p-4 md:p-8 rounded-[4rem] group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-8 right-8 bg-yellow-400 text-[#111057] w-20 h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center rotate-12 shadow-2xl border-4 border-[#111057]">
                  <span className="text-[10px] md:text-xs font-black uppercase">បញ្ចុះតម្លៃ</span>
                  <span className="text-xl md:text-3xl font-black">-30%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPromotion;