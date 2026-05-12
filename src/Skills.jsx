import React from 'react';
import { 
  Video, 
  Layers, 
  Zap, 
  Palette, 
  Box, 
  Volume2 
} from 'lucide-react';

const skills = [
  { 
    name: 'Video Editing', 
    icon: <Video size={32} />, 
    color: 'border-purple-500',
    tech: 'Premiere Pro' 
  },
  { 
    name: 'Motion Graphics', 
    icon: <Layers size={32} />, 
    color: 'border-blue-500',
    tech: 'After Effects'
  },
  { 
    name: 'Motion Animation', 
    icon: <Zap size={32} />, 
    color: 'border-indigo-500',
    tech: 'After Effects'
  },
  { 
    name: 'Color Grading', 
    icon: <Palette size={32} />, 
    color: 'border-yellow-500',
    tech: 'DaVinci Resolve'
  },
  { 
    name: '3D Animation', 
    icon: <Box size={32} />, 
    color: 'border-blue-400',
    tech: 'Cinema 4D'
  },
  { 
    name: 'Sound Design', 
    icon: <Volume2 size={32} />, 
    color: 'border-cyan-500',
    tech: 'Audition'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      {/* <h2 className="text-xs tracking-widest text-gray-500 uppercase mb-4">Section 3</h2> */}
      <h3 className="text-2xl font-black uppercase mb-8 tracking-tighter">Core Skills</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`bg-[#1a1d20] border-b-4 ${skill.color} p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-[#252a2f] hover:translate-y-[-4px] transition-all duration-300 cursor-default shadow-xl`}
          >
            {/* Icon Container */}
            <div className="mb-4 text-gray-400 group-hover:text-white transition-colors duration-300">
              {skill.icon}
            </div>
            
            {/* Skill Name */}
            <p className="text-[10px] uppercase font-black tracking-widest text-white mb-1">
              {skill.name}
            </p>
            
            {/* Tech Subtext (Optional, but adds to the 'Pro' look) */}
            {/* <p className="text-[8px] uppercase font-bold text-gray-500 tracking-tighter">
              {skill.tech}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;