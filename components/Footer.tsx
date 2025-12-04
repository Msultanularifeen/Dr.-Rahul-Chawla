import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Stethoscope } from 'lucide-react';

const Footer = () => {
  const handlePlaceholderClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    alert(`${name} page is coming soon!`);
  };

  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-teal-600 p-1.5 rounded-full">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">Dr. Rahul Chawla</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Empowering healthcare professionals and clinics to deliver world-class patient care through innovation and strategy.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-teal-500 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-teal-500 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-teal-500 transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="hover:text-teal-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-teal-500 transition-colors">Clinic Management</a></li>
              <li><a href="#services" className="hover:text-teal-500 transition-colors">Staff Training</a></li>
              <li><a href="#services" className="hover:text-teal-500 transition-colors">Telemedicine</a></li>
              <li><a href="#services" className="hover:text-teal-500 transition-colors">Strategic Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(e) => handlePlaceholderClick(e, 'Privacy Policy')} className="hover:text-teal-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => handlePlaceholderClick(e, 'Terms of Service')} className="hover:text-teal-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" onClick={(e) => handlePlaceholderClick(e, 'Cookie Policy')} className="hover:text-teal-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr. Rahul Chawla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;