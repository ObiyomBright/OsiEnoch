const jobs = [
  { year: "June - November 2024", title: "Social Media Manager", company: "Decent IT Services", desc: "I managed social media pages, developed engagement strategies, and edited promotional videos to boost brand visibility" },
  { year: "August - October 2024", title: "Social Media Manager", company: "Brumsbase Aluminium Company", desc: "I handled social media management and branding strategies while creating video content of completed projects and testimonials to attract clients" },
  { year: "June - September 2024", title: "Social Media Manager", company: "Tech City Real Estate Company", desc: "I filmed and edited promotional videos and managed social media content to showcase real estate properties and increase brand awareness" }
];

const Timeline = () => (
  <section id="experience">
    <h2 className="text-xs tracking-widest text-gray-400 uppercase mb-4">Section 2</h2>
    <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Work Experience</h3>
    <div className="space-y-8 border-l border-blue-600 ml-2">
      {jobs.map((job, i) => (
        <div key={i} className="relative pl-8">
          <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[6px] top-1.5 shadow-[0_0_10px_#2563eb]" />
          <span className="text-sm text-gray-400 font-mono">{job.year}</span>
          <h4 className="text-lg font-bold text-white uppercase">{job.title} | <span className="text-blue-400">{job.company}</span></h4>
          <p className="text-sm text-gray-400 mt-2 max-w-md leading-relaxed">{job.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;