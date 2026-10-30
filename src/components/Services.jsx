import React from 'react';
import { ShieldCheck, Truck, Wrench, Clock, Award, Star } from 'lucide-react';
import './Services.css'

const AutoScrollLoop = () => {
  const items = [
    { label: "High Quality", icon: <Award size={20} /> },
    { label: "Free Delivery", icon: <Truck size={20} /> },
    { label: "Professional Install", icon: <Wrench size={20} /> },
    { label: "24/7 Support", icon: <Clock size={20} /> },
    { label: "Warranty Guaranteed", icon: <ShieldCheck size={20} /> },
    { label: "Premium Design", icon: <Star size={20} /> },
  ];

  // We double the array to ensure the loop never shows a gap
  const doubleItems = [...items, ...items];

  return (
    <div className="bg-[#111057] py-6 overflow-hidden border-y border-white/10">
      {/* Container for the scroll */}
      <div className="flex relative">
        
        {/* The Animated Row */}
        <div className="flex animate-auto-scroll whitespace-nowrap gap-12 items-center">
          {doubleItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 text-white/90 hover:text-white transition-colors cursor-default"
            >
              <div className="bg-white/10 p-2 rounded-full">
                {item.icon}
              </div>
              <span className="text-lg font-bold tracking-wide uppercase font-['Kantumruy_Pro']">
                {item.label}
              </span>
              
              {/* Separator dot */}
              <div className="w-2 h-2 bg-blue-500 rounded-full ml-8 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            </div>
          ))}
        </div>

        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#111057] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#111057] to-transparent z-10" />
      </div>
    </div>
  );
};

export default AutoScrollLoop;