import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Timeline from './Timeline';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {

  const year = new Date().getFullYear();

  return (
    <div className="bg-[#0f1113] text-gray-100 min-h-screen selection:bg-blue-500">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        {/* The 12-Column Grid for Sticky Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">

          {/* LEFT COLUMN: Sticky Info (Experience & Skills) */}
          {/* 'lg:sticky' and 'lg:top-24' are the keys to keeping this visible */}
          <aside className="lg:col-span-5 space-y-16 lg:sticky lg:top-24 h-fit">
            <Timeline />
            <Skills />
            {/* You can optionally move Contact here to keep it visible too */}
            <div className="hidden lg:block">
              <Contact />
            </div>
          </aside>

          {/* RIGHT COLUMN: The Scrolling Portfolio (30+ Videos) */}
          <div className="lg:col-span-7 space-y-16">
            <Portfolio />
            {/* Mobile-only Contact section (shows at the bottom of the list) */}

            <div id="contact" className="scroll-mt-20" />
            <div className="lg:hidden">
              <Contact />
            </div>
          </div>

        </div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-800">
        © {year} MOMODU OSI ENOCH <br /> Video Editor & Visual Storyteller
      </footer>
    </div>
  );
}

export default App;