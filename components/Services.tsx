import React from 'react';
import { Stethoscope, BarChart3, Users, Globe, Building, HeartPulse } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-teal-600" />,
      title: "Clinic Management",
      description: "End-to-end operational optimization for medical practices to increase efficiency and patient throughput."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-teal-600" />,
      title: "Strategic Consulting",
      description: "Data-driven growth strategies for healthcare startups and established hospitals aiming for expansion."
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-600" />,
      title: "Telemedicine Setup",
      description: "Seamless integration of digital health platforms to extend your practice's reach beyond physical walls."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Staff Training",
      description: "Specialized training programs for medical and administrative staff to ensure world-class patient service."
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-teal-600" />,
      title: "Patient Experience",
      description: "Designing patient-centric journeys that improve satisfaction, retention, and clinical outcomes."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-teal-600" />,
      title: "Doctor Mentorship",
      description: "Guidance for young practitioners on navigating the business side of medicine and private practice."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Comprehensive Solutions for the Modern Medical Landscape</h3>
          <p className="text-slate-600">Tailored services designed to elevate healthcare standards and business performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="mb-6 bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                 {React.cloneElement(service.icon as React.ReactElement, { className: "h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" })}
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;