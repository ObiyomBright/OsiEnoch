import React, { useState } from 'react';

const Contact = () => {
  // 1. Set up state to capture form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Handle the redirect
  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "osimomodu4pure@gmail.com";
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // 3. Trigger the mailto redirect
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#1a1d20] p-8 rounded-xl border border-gray-800 max-w-2xl mx-auto my-12">
      <h3 className="text-xl font-bold mb-6 uppercase tracking-tighter">Let's Create Together</h3>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Name" 
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-[#0f1113] border border-gray-700 p-3 rounded-md focus:outline-none focus:border-blue-500 text-sm text-white" 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#0f1113] border border-gray-700 p-3 rounded-md focus:outline-none focus:border-blue-500 text-sm text-white" 
        />
        <textarea 
          name="message"
          rows="4" 
          placeholder="Message" 
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#0f1113] border border-gray-700 p-3 rounded-md focus:outline-none focus:border-blue-500 text-sm text-white"
        ></textarea>
        
        <button 
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md uppercase tracking-widest text-xs transition-colors shadow-lg shadow-blue-900/20"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-800 text-sm font-bold text-gray-400">
        <p>Direct Email: <span className="text-blue-400">osimomodu4pure@gmail.com</span></p>
      </div>
    </section>
  );
};

export default Contact;