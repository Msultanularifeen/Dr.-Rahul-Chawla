import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    alert("Thank you! Your message has been sent to Dr. Chawla's team. We will get back to you shortly.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">Let's Discuss Your Healthcare Goals</h3>
            <p className="text-slate-600 text-lg mb-8">
              Whether you are looking to optimize your clinic, train your staff, or collaborate on a project, Dr. Chawla's team is ready to assist you.
            </p>

            <div className="space-y-6">
              <a href="mailto:contact@drrahulchawla.com" className="flex items-start hover:bg-white hover:shadow-sm p-3 -ml-3 rounded-xl transition-all duration-300 group">
                <div className="bg-teal-100 p-3 rounded-full mr-4 group-hover:bg-teal-600 transition-colors">
                  <Mail className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">Email Us</h4>
                  <p className="text-slate-600 group-hover:text-teal-600 transition-colors">contact@drrahulchawla.com</p>
                </div>
              </a>

              <a href="tel:+919876543210" className="flex items-start hover:bg-white hover:shadow-sm p-3 -ml-3 rounded-xl transition-all duration-300 group">
                 <div className="bg-teal-100 p-3 rounded-full mr-4 group-hover:bg-teal-600 transition-colors">
                  <Phone className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">Call Us</h4>
                  <p className="text-slate-600 group-hover:text-teal-600 transition-colors">+91 987 654 3210</p>
                </div>
              </a>

              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start hover:bg-white hover:shadow-sm p-3 -ml-3 rounded-xl transition-all duration-300 group"
              >
                 <div className="bg-teal-100 p-3 rounded-full mr-4 group-hover:bg-teal-600 transition-colors">
                  <MapPin className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">Location</h4>
                  <p className="text-slate-600 group-hover:text-teal-600 transition-colors">New Delhi, India</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-0 transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-0 transition-colors disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-0 transition-colors disabled:opacity-50"
                >
                  <option value="">Select a topic</option>
                  <option value="Consulting">Clinic Consulting</option>
                  <option value="Mentorship">Doctor Mentorship</option>
                  <option value="Speaking">Speaking Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-0 transition-colors disabled:opacity-50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-navy-900 text-white font-bold py-4 rounded-lg hover:bg-teal-600 transition-colors duration-300 flex items-center justify-center disabled:bg-navy-800 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;