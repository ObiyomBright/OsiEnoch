import React from 'react';

const skills = [
  { name: 'Video Editing', icon: 'Pr', color: 'border-purple-500' },
  { name: 'Motion Graphics', icon: 'Ae', color: 'border-blue-500' },
  { name: 'After Effects', icon: 'Ae', color: 'border-indigo-500' },
  { name: 'Color Grading', icon: '🎨', color: 'border-yellow-500' },
  { name: '3D Animation', icon: '📦', color: 'border-blue-400' },
];

const Skills = () => {
  return (
    <section id="skills">
      {/* <h2 className="text-xs tracking-widest text-gray-500 uppercase mb-4">Section 3</h2> */}
      <h3 className="text-2xl font-bold uppercase mb-8">Core Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`bg-[#1a1d20] border-b-4 ${skill.color} p-6 rounded-lg flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform cursor-default shadow-lg`}
          >
            <div className="text-3xl font-black mb-3 text-white opacity-80">{skill.icon}</div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;