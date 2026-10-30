import React from 'react';
import { Ruler, Truck, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Installer = () => {
  const steps = [
    {
      title: "វាស់វែងទីតាំង",
      en: "Site Measurement",
      desc: "ក្រុមជាងជំនាញចុះទៅវាស់វែងទំហំទ្វារដល់ទីកន្លែងដោយឥតគិតថ្លៃ ដើម្បីធានាភាពសុក្រឹត។",
      icon: <Ruler className="w-8 h-8" />,
      stepNum: "01"
    },
    {
      title: "ដឹកជញ្ជូនរហ័ស",
      en: "Fast Delivery",
      desc: "ទំនិញត្រូវបានវេចខ្ចប់យ៉ាងប្រុងប្រយ័ត្ន និងដឹកជញ្ជូនដល់ផ្ទះលោកអ្នកក្នុងរយៈពេលខ្លី។",
      icon: <Truck className="w-8 h-8" />,
      stepNum: "02"
    },
    {
      title: "ការដំឡើងជំនាញ",
      en: "Expert Installation",
      desc: "ដំឡើងដោយជាងដែលមានបទពិសោធន៍ច្រើនឆ្នាំ ធានាភាពរឹងមាំ និងសោភ័ណភាព។",
      icon: <Wrench className="w-8 h-8" />,
      stepNum: "03"
    },
    {
      title: "ត្រួតពិនិត្យគុណភាព",
      en: "Quality Check",
      desc: "បន្ទាប់ពីដំឡើងរួច យើងមានការត្រួតពិនិត្យគុណភាពចុងក្រោយមុននឹងប្រគល់ជូនអតិថិជន។",
      icon: <ShieldCheck className="w-8 h-8" />,
      stepNum: "04"
    }
  ];

  return (
    <section className="py-24 bg-[#111057] text-white font-['Kantumruy_Pro',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
              ដំណើរការនៃ <br />
              <span className="text-blue-400">ការដំឡើងទ្វារ</span>
            </h2>
            <p className="text-white/60 text-lg">
              យើងផ្តល់ជូននូវសេវាកម្មពេញលេញ ចាប់ពីការវាស់វែង រហូតដល់ការដំឡើងរួចរាល់ជាស្ថាពរ។
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 bg-white/5 p-6 rounded-[2rem] border border-white/10">
            <div className="bg-blue-600 p-3 rounded-xl">
                <CheckCircle2 size={24} />
            </div>
            <div>
                <p className="text-xs uppercase tracking-wider text-blue-300 font-bold">Guarantee</p>
                <p className="font-bold">ដំឡើងស្អាត ១០០%</p>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              {/* Step Number Circle */}
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {step.icon}
                </div>
                <div className="absolute -top-4 -right-2 text-5xl font-black text-white/10 group-hover:text-blue-500/20 transition-colors">
                  {step.stepNum}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500 mb-4">
                  {step.en}
                </p>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              {/* Arrow/Indicator for Mobile */}
              {index !== steps.length - 1 && (
                <div className="md:hidden flex justify-center py-6">
                    <div className="w-[1px] h-10 bg-blue-500/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-700 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">តើលោកអ្នកចង់ឱ្យយើងចុះទៅវាស់វែងមែនទេ?</h4>
                <p className="text-blue-100 italic">យើងផ្តល់សេវាកម្មវាស់វែងជូនដោយមិនគិតថ្លៃ!</p>
            </div>
            <button className="whitespace-nowrap bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold hover:bg-[#111057] hover:text-white transition-all transform active:scale-95 shadow-lg">
                កក់ការវាស់វែងឥឡូវនេះ
            </button>
        </div>

      </div>
    </section>
  );
};

export default Installer;