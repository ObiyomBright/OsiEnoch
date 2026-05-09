const jobs = [
  {
    year: "2025 - Present",
    title: "Freelance Video Editor",
    company: "Self-Employed",
    desc: "Edited promotional videos, cinematic reels, and social media content for brands, businesses, and content creators across Nigeria using Adobe Premiere Pro and CapCut."
  },
  {
    year: "2024 - 2025",
    title: "Video Editor & Content Creator",
    company: "Tech City Real Estate",
    desc: "Shot and edited high-converting real estate walkthrough videos, client testimonials, and social media ads to improve online engagement and property visibility."
  },
  {
    year: "2024",
    title: "Social Media Video Editor",
    company: "Brumsbase Aluminium Company",
    desc: "Created engaging promotional videos, project showcase edits, and branded social media content to strengthen the company’s online presence and attract customers."
  },
  {
    year: "2024",
    title: "Video Editor",
    company: "Decent IT Services",
    desc: "Produced and edited marketing videos, tutorials, and event highlight clips while supporting the company’s digital branding and online campaigns."
  }
];

const Timeline = () => (
  <section id="experience">
    {/* <h2 className="text-xs tracking-widest text-gray-400 uppercase mb-4">Section 2</h2> */}
    <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Work Experience</h3>
    <div className="space-y-8 border-l border-blue-600 ml-2">
      {jobs.map((job, i) => (
        <div key={i} className="relative pl-8">
          <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[6px] top-1.5 shadow-[0_0_10px_#2563eb]" />
          {/* <span className="text-sm text-gray-400 font-mono">{job.year}</span> */}
          <h4 className="text-lg font-bold text-white uppercase">{job.title} | <span className="text-blue-400">{job.company}</span></h4>
          <p className="text-sm text-gray-400 mt-2 max-w-md leading-relaxed">{job.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;