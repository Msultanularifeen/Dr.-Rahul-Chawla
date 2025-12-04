import React, { useState } from 'react';
import { User, CheckCircle, X } from 'lucide-react';

const About = () => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/400/500?random=1" alt="Medical Conference" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
                <img src="https://picsum.photos/400/500?random=2" alt="Clinic Interior" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
             </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">About Dr. Rahul Chawla</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">Bridging the Gap Between Medicine & Management</h3>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Dr. Rahul Chawla is not just a physician; he is a visionary healthcare entrepreneur dedicated to optimizing the way care is delivered. With a deep understanding of clinical workflows and a passion for business strategy, he helps clinics scale, doctors thrive, and patients receive superior care.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Certified Medical Consultant with 10+ Years Experience",
                "Founder of 'HealthFirst' Network of Clinics",
                "Specialist in Telemedicine Implementation",
                "Advisor to Emerging Health-Tech Startups"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsBioOpen(true)}
              className="text-navy-900 font-semibold border-b-2 border-teal-500 hover:text-teal-600 transition-colors pb-1 inline-flex items-center group"
            >
              Read Full Bio 
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform ml-2">→</span>
            </button>
          </div>
          
        </div>
      </div>

      {/* Bio Modal */}
      {isBioOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button 
              onClick={() => setIsBioOpen(false)}
              className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            >
              <X className="h-6 w-6 text-slate-600" />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                 <img src="https://picsum.photos/100/100?random=50" alt="Dr. Rahul Chawla" className="w-20 h-20 rounded-full object-cover border-4 border-teal-50" />
                 <div>
                   <h3 className="text-2xl font-display font-bold text-navy-900">Dr. Rahul Chawla</h3>
                   <p className="text-teal-600 font-medium">MBBS, MD, MBA (Healthcare Management)</p>
                 </div>
              </div>

              <div className="prose prose-slate text-slate-600">
                <p className="mb-4">
                  Dr. Rahul Chawla began his career as a clinician but quickly realized that the biggest bottlenecks in healthcare weren't just medical—they were operational. Driven by a desire to impact more lives than he could in a single consultation room, he pursued an MBA in Healthcare Management.
                </p>
                <p className="mb-4">
                  Over the last decade, Dr. Chawla has:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Successfully turned around 15+ struggling clinics into profitable ventures.</li>
                  <li>Implemented telemedicine protocols for a network of rural hospitals, increasing patient access by 300%.</li>
                  <li>Authored "The Future Clinic," a guide for modern medical practitioners.</li>
                  <li>Keynote speaker at major health-tech summits across Asia.</li>
                </ul>
                <p>
                  Today, he leads a team of experts at his consultancy, helping the next generation of medical professionals build sustainable, patient-centric practices.
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setIsBioOpen(false)}
                  className="px-6 py-2 bg-navy-900 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;