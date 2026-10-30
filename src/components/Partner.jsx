import React from 'react';

const Partner = () => {
  // Showing only the primary partner image
  const primaryPartner = { 
    name: "Wonder Door Industrial", 
    logo: "./img/customer/Customer.jpg" // Replace with your Image 1
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100 font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <p className="text-[#111057] text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-6">
          ដៃគូផលិតកម្មផ្លូវការ
        </p>

        <div className="group transition-all duration-500 transform hover:scale-105">
          <img 
            src={primaryPartner.logo} 
            alt={primaryPartner.name} 
            className=" w-auto  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
        </div>

        <h3 className="mt-4 text-[#111057] text-lg font-bold opacity-80">
          {primaryPartner.name}
        </h3>
        
      </div>
    </section>
  );
};

export default Partner;