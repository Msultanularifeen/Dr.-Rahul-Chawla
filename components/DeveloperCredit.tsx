import React, { useState, useEffect } from 'react';
import { X, Code, MessageCircle, Mail } from 'lucide-react';

const DeveloperCredit = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a slight delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-200 p-4 max-w-sm relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start space-x-3">
          <div className="bg-teal-100 p-2 rounded-full mt-1">
            <Code className="h-5 w-5 text-teal-600" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
                <span className="bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Website For Sale
                </span>
            </div>
            <p className="text-sm font-semibold text-navy-900 mb-0.5">
              Designed & Developed by
            </p>
            <p className="text-sm font-bold text-teal-700 mb-2">
              Muhammad Sultan Ul Arifeen
            </p>
            <div className="space-y-1 mb-3">
              <a href="mailto:msultanularifeenofficial@gmail.com" className="flex items-center text-xs text-slate-600 hover:text-teal-600">
                <Mail className="h-3 w-3 mr-1.5" />
                msultanularifeenofficial@gmail.com
              </a>
              <a href="https://wa.me/923026082703" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-slate-600 hover:text-teal-600">
                <MessageCircle className="h-3 w-3 mr-1.5" />
                +92 302 6082703
              </a>
            </div>
            
            <div className="pt-2 border-t border-slate-100">
               <p className="text-[10px] text-slate-400 leading-tight">
                 Tech Support by <span className="font-medium text-slate-500">Gemini 3.0 Pro</span>, GitHub & Vercel.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCredit;