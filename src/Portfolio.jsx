import React, { useState } from 'react';

const projects = [
  { id: 1, title: "The Silent City", category: "Short Film", img: "https://picsum.photos/seed/sc1/600/400", tags: "Sci-Fi | 4K | Grading" },
  { id: 2, title: "Neon Dreams", category: "Music Video", img: "https://picsum.photos/seed/nd1/600/400", tags: "Synthwave | VFX" },
  { id: 3, title: "Tek Solutions", category: "Corporate", img: "https://picsum.photos/seed/tk1/600/400", tags: "Dynamic | Motion" },
  { id: 4, title: "Rise Apparel", category: "Commercial", img: "https://picsum.photos/seed/ra1/600/400", tags: "Cinematic | Sound" },
  { id: 5, title: "Urban Pulse", category: "Short Film", img: "https://picsum.photos/seed/up1/600/400", tags: "Drama | Editing" },
  { id: 6, title: "Cyber Runner", category: "Music Video", img: "https://picsum.photos/seed/cr1/600/400", tags: "Action | VFX" },
  { id: 6, title: "Cyber Runner", category: "Music Video", img: "https://picsum.photos/seed/cr1/600/400", tags: "Action | VFX" },
  { id: 6, title: "Cyber Runner", category: "Music Video", img: "https://picsum.photos/seed/cr1/600/400", tags: "Action | VFX" },
  { id: 6, title: "Cyber Runner", category: "Music Video", img: "https://picsum.photos/seed/cr1/600/400", tags: "Action | VFX" },
  { id: 6, title: "Cyber Runner", category: "Music Video", img: "https://picsum.photos/seed/cr1/600/400", tags: "Action | VFX" },
  { id: 6, title: "Cyber Runner", category: "Music Video", img: "https://picsum.photos/seed/cr1/600/400", tags: "Action | VFX" },
  { id: 6, title: "Cyber Runner", category: "Music Video", img: "https://picsum.photos/seed/cr1/600/400", tags: "Action | VFX" },
  { id: 6, title: "Cyber Runner", category: "Music Video", img: "https://picsum.photos/seed/cr1/600/400", tags: "Action | VFX" },

  // Add as many videos as you need here
];

const categories = ["All", "Short Film", "Music Video", "Commercial", "Corporate"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-xs tracking-widest text-gray-500 uppercase mb-2">Section 4</h2>
          <h3 className="text-3xl font-black uppercase tracking-tighter">Portfolio Gallery</h3>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Latest Projects</p>
        </div>

        {/* Category Filter - Essential for many videos */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 text-[10px] uppercase tracking-widest border transition-all ${
                activeFilter === cat 
                ? "bg-blue-600 border-blue-600 text-white" 
                : "border-gray-700 text-gray-500 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 
        Scrollable/Grid Area
        Uses a dense grid that matches the 'Alex Chen' reference aesthetic.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-800 mb-3 shadow-lg">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/40">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>

              {/* Status Badge from reference */}
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-[9px] font-bold text-gray-300 uppercase border border-gray-700">
                Editing / VFX
              </div>
            </div>

            {/* Project Details */}
            <div className="px-1">
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1">{project.category}</p>
              <h4 className="text-lg font-black uppercase tracking-tighter text-white leading-tight group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-[11px] text-gray-500 uppercase mt-1 tracking-tight">
                {project.tags}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button - For scale */}
      {filteredProjects.length > 4 && (
        <div className="mt-12 flex justify-center">
          <button className="px-10 py-3 border border-gray-700 text-gray-400 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black hover:border-white transition-all">
            Load More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;