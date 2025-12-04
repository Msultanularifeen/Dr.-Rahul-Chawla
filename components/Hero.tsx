import React from 'react';
import { ArrowRight, Activity, ShieldCheck, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-teal-50/50 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute top-20 left-10 -z-10 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
              Modern Healthcare Solutions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-navy-900 leading-tight">
              Reimagining <br />
              <span className="text-teal-600 relative">
                Healthcare
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>{" "}
              for Tomorrow
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Dr. Rahul Chawla combines medical expertise with entrepreneurial vision to build better clinics, empower doctors, and improve patient outcomes through strategic innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center px-8 py-3.5 bg-navy-900 text-white rounded-full font-medium hover:bg-navy-800 transition-transform transform hover:-translate-y-1 shadow-lg shadow-navy-900/20">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center px-8 py-3.5 border border-slate-200 text-slate-700 bg-white rounded-full font-medium hover:border-teal-600 hover:text-teal-600 transition-colors">
                Explore Services
              </a>
            </div>

            <div className="pt-8 flex items-center space-x-8 text-sm font-medium text-slate-500">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-teal-500 mr-2" />
                Trusted by 50+ Clinics
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-teal-500 mr-2" />
                15 Years Experience
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative lg:h-[600px] flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10 border-4 border-white">
               {/* Placeholder for Doctor's Image - using a professional abstract/medical person if generic */}
               <img 
                src="https://picsum.photos/600/800?grayscale" 
                alt="Dr. Rahul Chawla" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
               />
               
               {/* Floating Card */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Activity className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-navy-900 font-bold">10k+ Patients Impacted</p>
                    <p className="text-xs text-slate-500">Through managed clinics</p>
                  </div>
               </div>
            </div>
            
            {/* Decor Circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-navy-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;