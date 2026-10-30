import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';

const SlideShow = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "ទ្វារផ្ទះប្រណិតៗ គុណភាពខ្ពស់",
      subtitle: "Luxury Entrance Doors",
      description: "នាំចូលផ្តាច់មុខនូវទ្វារដែលមានគុណភាពខ្ពស់ រឹងមាំ និងមានសោភ័ណភាពស្រស់ស្អាតសម្រាប់គេហដ្ឋានលោកអ្នក។",
      image: "./img/slideshow/slide1.jpg",
      cta: "មើលផលិតផល"
    },
    {
      title: "សុវត្ថិភាពខ្ពស់ ទំនុកចិត្ត១០០%",
      subtitle: "Smart Security Solutions",
      description: "ការពារសុវត្ថិភាពគ្រួសារលោកអ្នកជាមួយបច្ចេកវិទ្យាទ្វារឆ្លាតវៃ និងប្រព័ន្ធចាក់សោរដ៏រឹងមាំបំផុត។",
      image: "./img/slideshow/slide2.jpg",
      cta: "ស្វែងយល់បន្ថែម"
    },
    {
      title: "ការរចនាបែបអឺរ៉ុប ទាន់សម័យ",
      subtitle: "Modern European Design",
      description: "ផ្តល់ជូននូវជម្រើសម៉ូដទ្វារឈើ និងទ្វារដែកជាច្រើនប្រភេទដែលកំពុងពេញនិយមបំផុតនៅកម្ពុជា។",
      image: "./img/slideshow/slide3.jpg",
      cta: "កម្មង់ឥឡូវនេះ"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrent(current => current === slides.length - 1 ? 0 : current + 1);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent(current => current === 0 ? slides.length - 1 : current - 1);
  }, [slides.length]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]); // Added nextSlide to dependency array

  return (
    <div className="relative h-[600px] md:h-[750px] w-full overflow-hidden bg-gray-100 font-['Kantumruy_Pro',sans-serif]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Dark Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out scale-105"
            style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === current ? 'scale(1)' : 'scale(1.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#111057]/90 via-[#111057]/40 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-2xl text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 px-3 py-1 rounded-full text-blue-300 text-sm mb-6 animate-bounce">
                <ShieldCheck size={16} />
                <span className="font-medium tracking-wide">លក់ដាច់បំផុតនៅកម្ពុជា</span>
              </div>

              {/* Title Group */}
              <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl font-light text-blue-200 mb-6 tracking-wide uppercase">
                {slide.subtitle}
              </p>
              <p className="text-lg text-gray-200/90 mb-10 leading-relaxed font-light">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://t.me/Marynhoeb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#111057] hover:bg-white hover:text-[#111057] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all transform active:scale-95 group shadow-2xl">
                    {slide.cta}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a 
                  href="https://t.me/Marynhoeb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all">
                    ទាក់ទងមកយើង
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#111057] transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#111057] transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-10 bg-blue-500 h-2' : 'w-2 bg-white/50 h-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;