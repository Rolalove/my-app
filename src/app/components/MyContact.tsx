"use client"
import { useState } from 'react';


export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormStatus('Message sent successfully! I\'ll get back to you soon.');
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      
      <section className="pt-20  min-h-screen bg-first_Bc flex items-center justify-center px-4">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-text_one mb-2 text-center">Let&apos;s Connect</h2>
          <p className="text-center text-text_one mb-8">I&apos;m always open to new opportunities and collaborations. Feel free to reach out!</p>
          <form id="contactForm" onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pb-2 bg-transparent border-b-2 border-text_one focus:outline-none focus:border-second_Bc transition-colors peer"
                required
                placeholder=" "
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 -top-3.5 text-text_one text-sm transition-all 
                           peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                           peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-second_Bc"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pb-2 bg-transparent border-b-2 border-text_one focus:outline-none focus:border-second_Bc transition-colors peer"
                required
                placeholder=" "
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 -top-3.5 text-text_one text-sm transition-all 
                           peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                           peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-second_Bc"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full pb-2 bg-transparent border-b-2 border-text_one focus:outline-none focus:border-second_Bc transition-colors peer resize-none"
                required
                placeholder=" "
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 -top-3.5 text-text_one text-sm transition-all 
                           peer-placeholder-shown:text-base peer-placeholder-shown:top-2 
                           peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-second_Bc"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-second_Bc text-white hover:bg-opacity-90  font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <p className="text-second_Bc mt-4 text-center animate-fade-in-down font-medium">
              {formStatus}
            </p>
          )}
        </div>
      </section>
    </>
  );
}