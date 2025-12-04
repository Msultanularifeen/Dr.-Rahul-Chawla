import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Chawla's strategic insights transformed our multi-specialty clinic. Patient flow improved by 40% within six months.",
      author: "Dr. Anjali Gupta",
      role: "Director, City Care Hospital",
      image: "https://picsum.photos/100/100?random=10"
    },
    {
      quote: "A rare combination of medical excellence and business acumen. The telemedicine system he implemented saved our practice during the pandemic.",
      author: "Rajesh Kumar",
      role: "CEO, MedTech Solutions",
      image: "https://picsum.photos/100/100?random=11"
    },
    {
      quote: "The staff training program was a game-changer. Our team is now more cohesive, professional, and patient-focused than ever.",
      author: "Sarah Jenkins",
      role: "Clinic Manager",
      image: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-400 font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-teal-500/30" />
              <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-teal-500 mr-4" />
                <div>
                  <h5 className="font-bold text-white">{t.author}</h5>
                  <span className="text-xs text-teal-400 uppercase tracking-wide">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;