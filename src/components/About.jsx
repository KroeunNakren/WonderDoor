import React from 'react';
import { CheckCircle2, Award, Users, ShieldCheck, Factory, Truck } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={32} />, label: "អតិថិជនសរុប", value: "10k+" },
    { icon: <Factory size={32} />, label: "បទពិសោធន៍", value: "12 Years" },
    { icon: <Award size={32} />, label: "រង្វាន់គុណភាព", value: "15+" },
  ];

  const values = [
    {
      title: "គុណភាពខ្ពស់",
      desc: "យើងប្រើប្រាស់វត្ថុធាតុដើម WPC និងឈើធម្មជាតិដែលល្អបំផុតសម្រាប់គេហដ្ឋានរបស់អ្នក។",
      icon: <ShieldCheck className="text-blue-600" size={40} />
    },
    {
      title: "សេវាកម្មរហ័ស",
      desc: "ការដឹកជញ្ជូន និងការដំឡើងប្រកបដោយវិជ្ជាជីវៈ និងរហ័សទាន់ចិត្ត ២៤ខេត្តក្រុង។",
      icon: <Truck className="text-blue-600" size={40} />
    },
    {
      title: "ទំនុកចិត្ត",
      desc: "រាល់ផលិតផលរបស់យើងមានការធានាត្រឹមត្រូវជូនអតិថិជនរហូតដល់ ៥ ឆ្នាំ។",
      icon: <CheckCircle2 className="text-blue-600" size={40} />
    }
  ];

  return (
    <div className="pb-20 font-['Kantumruy_Pro',sans-serif]">
      {/* --- Hero Section --- */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-[#111057]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://scontent.fpnh7-2.fna.fbcdn.net/v/t39.30808-6/504241100_122214356432171065_3699436942042980652_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oO1u7ZrYLloQ7kNvwExPor6&_nc_oc=AdkVj98zrGBNIScEnYuZ3Tsom6mnpzAsOAc2_inarOEmAO2vDn4a-DQP5eN6XOg5B2I&_nc_zt=23&_nc_ht=scontent.fpnh7-2.fna&_nc_gid=UDY-ajvHyvZ28_SqKPpuCA&oh=00_AfoJpjV4fxLCd1VtSLMExzrJEPzKA5a1kKLpk9zqSqiq8Q&oe=69664F99" 
            alt="Showroom" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
            អំពីយើង
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            ផ្តល់ជូននូវដំណោះស្រាយទ្វារដ៏ល្អឥតខ្ចោះ សម្រាប់ភាពស្រស់ស្អាត និងសុវត្ថិភាពនៃគេហដ្ឋានរបស់អ្នក។
          </p>
        </div>
      </section>

      {/* --- Story & Mission --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="./img/logo/logo.jpg" 
                  alt="Modern Interior Door" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-10 rounded-[2.5rem] hidden md:block shadow-xl">
                <p className="text-4xl font-black italic">Quality First</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-widest">
                Our Story
              </div>
              <h2 className="text-[#111057] text-3xl md:text-4xl font-black leading-tight">
                អ្នកជំនាញផ្គត់ផ្គង់ទ្វារ WPC និងទ្វារឈើឈានមុខគេនៅកម្ពុជា
              </h2>
              <p className="text-gray-600 leading-relaxed">
                យើងបានចាប់ផ្តើមដំណើរការតាំងពីឆ្នាំ ២០១២ ក្នុងគោលបំណងនាំយកបច្ចេកវិទ្យាទ្វារដ៏ទំនើបបំផុតមកកាន់ទីផ្សារកម្ពុជា។ 
                ផលិតផលរបស់យើងត្រូវបានរចនាឡើងដើម្បីឆ្លើយតបទៅនឹងអាកាសធាតុត្រូពិច ធន់នឹងកម្តៅថ្ងៃ មិនជ្រាបទឹក និងមិនមានការស៊ីបំផ្លាញពីសត្វល្អិត។
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <div className="text-blue-600 flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-black text-[#111057]">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#111057] text-3xl md:text-4xl font-black mb-4">គុណតម្លៃស្នូលរបស់យើង</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-[#111057] text-xl font-black mb-4">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-[#111057] p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6">តើអ្នកត្រៀមខ្លួនសម្រាប់គេហដ្ឋានថ្មីហើយឬនៅ?</h2>
              <p className="text-blue-100 mb-10 max-w-xl mx-auto">
                ទាក់ទងមកយើងឥឡូវនេះ ដើម្បីទទួលបានការប្រឹក្សាដោយឥតគិតថ្លៃ និងការផ្តល់ជូនពិសេសបំផុត។
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20">
                  ប្រឹក្សាយោបល់ឥឡូវនេះ
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm border border-white/20">
                  មើលផលិតផល
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;