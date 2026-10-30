import React from 'react';
import { MapPin, ExternalLink, Building2 } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Borey Peng Huoth Villa",
      location: "Phnom Penh",
      type: "Luxury Wooden Doors",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Modern Condo Complex",
      location: "Sihanoukville",
      type: "Fire-Rated Steel Doors",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Private Residential Office",
      location: "Siem Reap",
      type: "WPC Waterproof Doors",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "The Gateway Apartment",
      location: "Phnom Penh",
      type: "Interior Melamine Doors",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="py-24 bg-white font-['Kantumruy_Pro',sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-[0.2em] text-xs">
              <Building2 size={16} /> Portfolio
            </div>
            <h2 className="text-[#111057] text-4xl md:text-5xl font-black mb-4">
              គម្រោងដែលយើង <br /> <span className="text-gray-400">បានបញ្ចប់</span>
            </h2>
            <p className="text-gray-500">
              មោទនភាពក្នុងការផ្តល់ជូននូវទ្វារដែលមានគុណភាពខ្ពស់ សម្រាប់គេហដ្ឋាន និងអគារពាណិជ្ជកម្មធំៗនៅក្នុងប្រទេសកម្ពុជា។
            </p>
          </div>
          <button className="bg-[#111057] text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
            មើលគម្រោងទាំងអស់ <ExternalLink size={18} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl"
            >
              {/* Image Background */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111057] via-[#111057]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Project Info */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 text-blue-400 mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <MapPin size={16} />
                  <span className="text-sm font-bold uppercase tracking-wider">{project.location}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                
                <p className="text-white/60 font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 mb-6">
                  {project.type}
                </p>

                <div className="w-full h-[1px] bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                
                <div className="mt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                   <span className="text-xs font-bold uppercase tracking-widest text-blue-400">View Case Study</span>
                   <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                      <ExternalLink size={14} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;