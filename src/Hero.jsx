import React, { useState, useEffect, useRef } from 'react';

// Using video thumbnails instead of picsum for the media bin
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
  const [isPlaying, setIsPlaying] = useState(false);

  // TRANSFORMATION: Converts your GDrive view link to a direct stream link
  const showreelUrl = "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778341473/output_compressed_bxj0pz.mp4";

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch((error) => {
            console.log("Autoplay was prevented:", error);
          });
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="pt-24 pb-12">
        
      <div className="relative min-h-[500px] md:aspect-[16/9] bg-[#0f1113] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
  
  {/* The Grid Background Layer */}
  <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 gap-2 p-2 opacity-30">
    {mediaGridItems.map((item) => (
      <div key={item.id} className={`${item.position} relative group rounded-lg overflow-hidden`}>
        <img 
          src={item.url} 
          alt="Media preview" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-1 right-1 px-1.5 py-0.5 text-[8px] bg-black/70 rounded text-gray-300 font-mono">
          00:15
        </div>
      </div>
    ))}
  </div>

  {/* Central CTA Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8 bg-black/60 backdrop-blur-sm">
    <div className="max-w-2xl space-y-3 md:space-y-4">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
        <span className="text-gray-400">MOMODU OSI ENOCH</span> <br />
        <span className="leading-tight">Professional Video Editor</span> <br />
      </h1>
      <p className="text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] text-blue-400 uppercase">
        Bringing Visual Stories to Life
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-10 w-full sm:w-auto px-6 sm:px-0">
      <a href="#portfolio" className="px-6 py-3 md:py-2 border border-white rounded-lg text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer">
        View Portfolio
      </a>
      <a href="#contact" className="px-6 py-3 md:py-2 bg-blue-600 text-white text-xs md:text-sm font-bold rounded-lg uppercase tracking-widest hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
        Hire Me
      </a>
    </div>
  </div>
</div>

      {/* Featured Showreel Section with Auto-play Video */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold uppercase mb-8">Video Showreel</h3>
        <div className="aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden relative group cursor-pointer bg-black shadow-2xl border border-gray-800">
          
          <video
            ref={videoRef}
            src={showreelUrl}
            className={`w-full h-full object-contain transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-60'}`}
            muted
            loop
            playsInline
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Minimalist Play Icon - Logic: disappears when isPlaying is true */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-white/40 bg-white/5 backdrop-blur-sm group-hover:scale-105 transition-transform">
              <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;