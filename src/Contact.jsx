const Contact = () => (
  <section className="bg-[#1a1d20] p-8 rounded-xl border border-gray-800">
    {/* <h2 className="text-xs tracking-widest text-gray-400 uppercase mb-2">Section 5</h2> */}
    <h3 className="text-xl font-bold mb-6 uppercase tracking-tighter">Let's Create Together</h3>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full bg-[#0f1113] border border-gray-700 p-3 rounded-md focus:outline-none focus:border-blue-500 text-sm" />
      <input type="email" placeholder="Email" className="w-full bg-[#0f1113] border border-gray-700 p-3 rounded-md focus:outline-none focus:border-blue-500 text-sm" />
      <textarea rows="4" placeholder="Message" className="w-full bg-[#0f1113] border border-gray-700 p-3 rounded-md focus:outline-none focus:border-blue-500 text-sm"></textarea>
      <button id="contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md uppercase tracking-widest text-xs transition-colors">
        Send Message
      </button>
    </form>
    <div className="mt-8 pt-8 border-t border-gray-800 text-sm font-bold text-gray-400">
      <p>Email: osimomodu4pure@gmail.com</p>
    </div>
  </section>
);

export default Contact;