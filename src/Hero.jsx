import React, { useEffect, useRef } from 'react';

const mediaGridItems = [
  { id: 1, type: 'video', url: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=400', position: 'col-span-1 row-span-1' },
  { id: 2, type: 'video', url: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400', position: 'col-span-1 row-span-1' },
  { id: 3, type: 'video', url: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=400', position: 'col-span-1 row-span-1' },
  { id: 4, type: 'video', url: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=400', position: 'col-span-1 row-span-1' },
  { id: 5, type: 'video', url: 'https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=400', position: 'col-span-1 row-span-1' },
  { id: 6, type: 'video', url: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=400', position: 'col-span-1 row-span-1' },
];

const Hero = () => {
  const videoRef = useRef(null);
  const showreelUrl = "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778341473/output_compressed_bxj0pz.mp4";

  useEffect(() => {
    const options = { threshold: 0.5 };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="pt-20 md:pt-24 pb-12 px-4 max-w-7xl mx-auto">
      {/* Main Hero Card */}
      <div className="relative min-h-[500px] md:aspect-[16/9] bg-[#0f1113] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
        
        {/* The Grid Background Layer - Reduced opacity on mobile for readability */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-2 p-2 opacity-20 md:opacity-30">
          {mediaGridItems.map((item) => (
            <div key={item.id} className="relative group rounded-lg overflow-hidden">
              <img 
                src={item.url} 
                alt="Media preview" 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>

        {/* Central CTA Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8 bg-black/60 backdrop-blur-sm">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              <span className="text-gray-400 text-lg sm:text-xl md:text-2xl block mb-2">MOMODU OSIKHEPUE ENOCH</span>
              Professional Video Editor <br className="hidden sm:block" />
              <span className="text-blue-500">&</span> Motion Designer
            </h1>
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-blue-400 uppercase font-medium">
              Bringing Visual Stories to Life
            </p>
          </div>

          {/* Action Buttons - Stack on small mobile, row on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full sm:w-auto">
            <a href="#portfolio" className="px-8 py-3 border border-white rounded-lg text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
              View Portfolio
            </a>
            <a href="#contact" className="px-8 py-3 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg text-center">
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Featured Showreel Section */}
      <div className="mt-12 md:mt-16">
        <h3 className="text-xl md:text-2xl font-black uppercase mb-6 md:mb-8 tracking-tighter">Video Showreel</h3>
        
        {/* Container remains 16:9 on desktop but adjusts to content on mobile */}
        <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden relative group bg-black shadow-2xl border border-gray-800">
          <video
            ref={videoRef}
            src={showreelUrl}
            className="w-full h-auto max-h-[70vh] object-contain opacity-70 group-hover:opacity-90 transition-opacity"
            muted
            loop
            playsInline
            controls
          />

          {/* Overlay UI - Simplified for mobile */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none group-hover:hidden transition-all bg-black/20">
            <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full border-2 border-white/40 bg-white/5 backdrop-blur-sm">
              <div className="w-0 h-0 border-t-[10px] md:border-t-[14px] border-t-transparent border-l-[18px] md:border-l-[24px] border-l-white border-b-[10px] md:border-b-[14px] border-b-transparent ml-1 md:ml-2" />
            </div>
            <p className="absolute bottom-4 left-4 md:bottom-6 md:left-6 font-black tracking-tighter uppercase text-base md:text-xl text-white">
              Featured Showreel 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;