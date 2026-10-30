import React from 'react';
import { ShieldCheck, Award, Users, BadgeCheck, Wrench, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "គុណភាពស្តង់ដារអន្តរជាតិ",
      desc: "រាល់ទ្វាររបស់យើងត្រូវបានផលិតឡើងតាមបច្ចេកវិទ្យាចុងក្រោយ បញ្ជាក់គុណភាព ISO។",
      en: "International Standards"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "ធានាជូនរហូតដល់ ៥ឆ្នាំ",
      desc: "យើងផ្តល់ការធានាលើការប្រើប្រាស់ និងសេវាកម្មជួសជុលដោយឥតគិតថ្លៃ។",
      en: "Up to 5 Years Warranty"
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "សេវាកម្មដំឡើងរហ័ស",
      desc: "ក្រុមជាងជំនាញដំឡើងបានយ៉ាងស្អាត និងរឹងមាំ ក្នុងរយៈពេលត្រឹមតែ ១ថ្ងៃ។",
      en: "Expert Installation"
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "រចនាម៉ូដទាន់សម័យ",
      desc: "ជម្រើសច្រើនជាង ៥០០ម៉ូដ សម្រាប់តម្រូវការគេហដ្ឋានបែបទំនើប និងបុរាណ។",
      en: "Modern & Classic Designs"
    }
  ];

  return (
    <section className="relative py-24 bg-[#111057] overflow-hidden font-['Kantumruy_Pro',sans-serif]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-32" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Content */}
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="./img/logo/logo.jpg" 
                alt="Quality Door" 
                className="w-full h-[600px] object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center gap-4">
                <div className="bg-yellow-500 p-3 rounded-full text-[#111057]">
                  <BadgeCheck size={32} />
                </div>
                <div className="text-white">
                  <p className="text-sm opacity-80">ជម្រើសលេខ១ នៅកម្ពុជា</p>
                  <p className="text-xl font-bold">ក្រុមហ៊ុនទ្វារដែលមានទំនុកចិត្តខ្ពស់</p>
                </div>
              </div>
            </div>
            
            {/* Experience Box */}
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-5xl font-black mb-1">15+</p>
              <p className="text-xs uppercase tracking-widest font-bold">Years of <br /> Excellence</p>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="text-white">
            <div className="mb-12">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 leading-tight">
                ហេតុអ្វីអតិថិជនតែងតែ <br />
                <span className="text-blue-400">ជ្រើសរើសសេវាកម្មយើង?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                យើងមិនត្រឹមតែលក់ទ្វារប៉ុណ្ណោះទេ ប៉ុន្តែយើងផ្តល់ជូននូវសុវត្ថិភាព និងភាពស្រស់ស្អាតសម្រាប់គេហដ្ឋានរបស់អ្នក។ ជាមួយនឹងបទពិសោធន៍ជាង ១៥ឆ្នាំ យើងយល់ច្បាស់ពីតម្រូវការអតិថិជន។
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
              {reasons.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/50 font-medium mb-2">{item.en}</p>
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-white text-[#111057] px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center gap-3 active:scale-95">
              ប្រឹក្សាយោបល់ឥតគិតថ្លៃ
              <Users size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;