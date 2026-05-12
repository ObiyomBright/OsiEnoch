import React, { useState, useEffect, useRef } from 'react';
import { X, Maximize2 } from 'lucide-react';

const projects = [
  { id: 1, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778588548/Is_your_password_really_keeping_you_safe__Hackers_can_crack_weak_passwords_in_seconds__Use_long_passphrases_and_enable_Two-Factor_Authentication_2FA_etbyw6.mp4" },
  {id: 9, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778343905/compressed_pikkachan_s_New_Video_rvafl3.mp4"},
  { id: 2, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778587949/Earn_With_Tech_in_90_Days__What_s_Real___What_s_Not_Everyone_is_talking_about_making_money_in_tech_but_what_s_actually_real__and_what_s_just_hype__jgl1fc.mp4" },
  { id: 3, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778587950/Feeling_stuck_after_graduation__Many_graduates__NYSC_corps_members__and_soon-to-graduate_students_feel_confused_about_their_next_steps._Applications__on_dhyjpn.mp4" },
  { id: 4, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778587978/Meet_Shalom___from_beginner_to_confident_Web_Developer._In_this_graduation_interview__Shalom_shares_her_journey_at_DITS_Academy_from_struggling_with_p5aibp.mp4" },


  // { id: 5, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778343890/compressed_James_Coffe_Vox_nubfiw.mp4" },
  { id: 6, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778343887/compressed_How_to_Create_a_Budget_that_Works_For_You_vuhv0t.mp4" },
  { id: 7, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778343886/compressed_Elympics_ai_kgnbqh.mp4" },
  { id: 8, videoUrl: "https://res.cloudinary.com/dhyg3bdle/video/upload/f_auto,q_auto/v1778343885/compressed_Vox_Style_Merry_Christmas_Edit_ukzff5.mp4" },

];

const VideoCard = ({ project, onOpen }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => { });
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="group cursor-pointer" onClick={() => onOpen(project)}>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shadow-lg">
        <video
          ref={videoRef}
          src={project.videoUrl}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          loop
          muted={true}
          playsInline
        />

        {/* Hover UI */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
            <Maximize2 className="text-white w-6 h-6" />
          </div>
        </div>

        {/* <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-[9px] font-bold text-gray-300 uppercase border border-gray-700">
          VFX / 4K
        </div> */}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="portfolio" className="py-12">
      <div className="mb-12">
        <h3 className="text-3xl font-black uppercase tracking-tighter">Portfolio Gallery</h3>
        {/* <p className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.3em] mt-2">Selected Works</p> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <VideoCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in duration-300">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            <video
              src={selectedProject.videoUrl}
              className="w-full h-full object-contain"
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;